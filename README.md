# TransLLAMA

**TransLLAMA** is a research project developed by PRISMA S.R.L. that leverages local large language models to provide precise, context-aware translations. The project integrates Next.js, Tailwind CSS, and the Ollama API, using the ChatGPT o3-mini-high model to deliver high-quality translations.

## Overview

TransLLAMA aims to:
- Provide translations that are formatted exclusively within `<translation>...</translation>` tags.
- Ensure grammatical correctness and proper vocabulary usage in the target language.
- Separate AI-generated reasoning (if present) from the main translation, displaying it in an accordion-style component.

**Important Note:**  
The entire project has been developed using the ChatGPT o3-mini-high model. No manual modifications were made to the code by developers; only the prompts were defined by human experts.

## Features

- **User-friendly Interface:** Inspired by popular translation platforms, featuring dynamic model and language selection.
- **Multilingual Support:** All texts and labels are managed via a backend-provided internationalization system supporting both Italian and English.
- **Advanced UI/UX:** Utilizes [lucide-react](https://lucide.dev/) icons and custom styling with Tailwind CSS for a modern and intuitive user experience.
- **Research Focus:** TransLLAMA is a research initiative exploring the potential of local large language models and does not represent a commercial product.

## Technologies Used

- **Frontend:** Next.js (App Router & API), Tailwind CSS, lucide-react
- **Backend:** Node.js, integration with the Ollama API for local large language models
- **AI Engine:** ChatGPT o3-mini-high (the model behind TransLLAMA)

## About PRISMA S.R.L.

[PRISMA S.R.L.](https://prismaservices.it) is an Italian company that offers custom IT solutions and technology consulting. Their motto is "Connecting Innovation and Talent." PRISMA S.R.L. provides tailor-made IT solutions in various domains such as Mobile Apps, Websites and Applications, Business Software, Cloud Solutions, Online Stores, and Technology Consulting.

## Project Objective

TransLLAMA is a research project exploring innovative approaches to translation using local large language models. The primary research focus was to develop a web application entirely powered by a state-of-the-art large language model. The objective is to deliver precise, contextually accurate translations by harnessing advanced AI. This project is solely for research purposes and does not represent a commercial product.

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prisma-Innovation/TransLLAMA.git
   cd TransLLAMA
   ```

Before running the project, ensure that Ollama is installed on your system. Then, pull the development model by running:
```bash
ollama pull deepseek-r1:8b
```
