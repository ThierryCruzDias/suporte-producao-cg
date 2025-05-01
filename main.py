import sys
import os
import random
import time
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, request, jsonify

# Initialize Flask app
app = Flask(__name__, static_folder="static", static_url_path="")

# --- Simulated AI Logic ---
def simulate_ai_analysis(text):
    """Simulates sentiment and entity analysis based on text content."""
    # Simulate processing time
    time.sleep(random.uniform(0.5, 1.5))

    # Simulated Sentiment
    sentiment_score = random.uniform(-0.8, 0.8) # Random score between -0.8 and 0.8
    sentiment_magnitude = random.uniform(0.1, 2.0) # Random magnitude

    # Simulated Entities (simple keyword extraction)
    words = text.lower().split()
    common_words = {"o", "a", "os", "as", "um", "uma", "uns", "umas",
                    "de", "do", "da", "dos", "das", "em", "no", "na", "nos", "nas",
                    "com", "por", "para", "sem", "sob", "sobre",
                    "e", "ou", "mas", "se", "que", "como", "quando", "onde",
                    "meu", "minha", "seu", "sua", "dele", "dela",
                    "está", "é", "foi", "era", "ser", "ter", "fazer",
                    "muito", "pouco", "mais", "menos", "bem", "mal",
                    "aqui", "ali", "lá", "cá", "não", "sim"}
    potential_entities = [word for word in words if word.isalnum() and word not in common_words and len(word) > 3]

    entities = []
    entity_types = ["OTHER", "WORK_OF_ART", "EVENT", "PERSON", "LOCATION", "ORGANIZATION"]
    for entity_name in list(set(potential_entities))[:5]: # Get unique entities, limit to 5
        entities.append({
            "name": entity_name,
            "type": random.choice(entity_types),
            "salience": random.uniform(0.1, 0.9)
        })

    # Sort entities by salience (descending)
    entities.sort(key=lambda x: x["salience"], reverse=True)

    return {
        "sentiment_score": sentiment_score,
        "sentiment_magnitude": sentiment_magnitude,
        "entities": entities
    }
# --- End Simulated AI Logic ---

@app.route('/')
def index():
    # Serve a simple status page
    return jsonify({"status": "Simulated AI Proxy Running", "message": "Send POST requests to /analyze"})

@app.route('/analyze', methods=['POST'])
def analyze_text():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({"error": "Missing 'text' in request body"}), 400

    text_content = data['text']

    try:
        # Use the simulation function
        simulated_data = simulate_ai_analysis(text_content)
        return jsonify(simulated_data)

    except Exception as e:
        print(f"Error during simulated analysis: {e}")
        return jsonify({"error": "Failed to simulate text analysis", "details": str(e)}), 500

if __name__ == '__main__':
    # Listen on all interfaces, required for external access via deploy tools
    app.run(host='0.0.0.0', port=5001)