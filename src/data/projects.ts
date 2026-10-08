export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl: string;
  category: "Machine Learning" | "Deep Learning" | "AI & RAG" | "Web Development";
  featured: boolean;
  highlights: string[];
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "acad-assist-rag",
    number: "01",
    title: "AI-Based Academic Knowledge Reasoning System",
    subtitle: "ACAD Assist • RAG-Powered Engineering Intelligence",
    description: "An AI-powered academic knowledge reasoning system using Retrieval-Augmented Generation (RAG) to retrieve relevant information and generate contextual responses.",
    fullDescription: "ACAD Assist leverages Retrieval-Augmented Generation (RAG) using Hugging Face embeddings and FAISS vector indices to provide precise, halluncination-free explanations for complex engineering syllabus subjects. It integrates a high-performance FastAPI/Django backend with a responsive React frontend.",
    image: "/assets/images/acad_assist.png",
    technologies: ["React", "Django", "FastAPI", "Hugging Face", "FAISS", "PostgreSQL", "Docker", "RAG"],
    githubUrl: "https://github.com/sobhiya-dev/acad-assist-rag",
    liveDemoUrl: "https://acad-assist-demo.vercel.app",
    category: "AI & RAG",
    featured: true,
    highlights: [
      "Won Best Paper Award at 1st International Conference ICSIDE'26",
      "Sub-200ms semantic similarity retrieval using FAISS vector store",
      "Context-aware response generation with engineering formula rendering",
      "Dockerized microservices architecture with PostgreSQL storage"
    ],
    metrics: [
      { label: "Retrieval Accuracy", value: "96.4%" },
      { label: "Query Latency", value: "< 180ms" },
      { label: "Syllabus Coverage", value: "100%" }
    ]
  },
  {
    id: "skin-disease-classification",
    number: "02",
    title: "Skin Disease Classification",
    subtitle: "Deep Learning & Computer Vision System",
    description: "Deep learning system for classifying multiple skin disease categories using CNN-based image classification and transfer learning.",
    fullDescription: "Built with TensorFlow/Keras and EfficientNet architecture, this diagnostic assistant classifies clinical dermatological scans into primary disease categories. Includes image preprocessing pipelines, data augmentation, and visual saliency map overlays.",
    image: "/assets/images/skin_disease.png",
    technologies: ["Python", "TensorFlow", "Keras", "EfficientNet", "CNN", "Deep Learning"],
    githubUrl: "https://github.com/SobhiyaTech/CNN-based-image-classification",
    liveDemoUrl: "https://skin-diagnosis-ai.streamlit.app",
    category: "Deep Learning",
    featured: true,
    highlights: [
      "EfficientNet-B4 fine-tuned on ISIC dermatological dataset",
      "Multi-class classification covering 7 major skin condition types",
      "Grad-CAM visual explanation overlay for medical interpretability",
      "Interactive image drag-and-drop diagnostic web client"
    ],
    metrics: [
      { label: "Validation Accuracy", value: "94.2%" },
      { label: "F1 Score", value: "0.93" },
      { label: "Inference Speed", value: "45ms" }
    ]
  },
  {
    id: "medical-insurance-cost-prediction",
    number: "03",
    title: "Medical Insurance Cost Prediction",
    subtitle: "ML Analytics & Predictive Modeling",
    description: "Machine learning application that predicts medical insurance costs using feature engineering and Linear Regression, with an interactive Streamlit interface.",
    fullDescription: "Analyzes demographic factors like age, BMI, smoking status, region, and dependents to accurately forecast healthcare charges. Employs advanced feature scaling, exploratory data analysis with Seaborn, and regularized regression modeling.",
    image: "/assets/images/medical_insurance.png",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Linear Regression", "Streamlit"],
    githubUrl: "https://github.com/SobhiyaTech/Medical_Insurance_Cost_Prediction",
    liveDemoUrl: "https://medical-insurancecostprediction.streamlit.app/",
    category: "Machine Learning",
    featured: true,
    highlights: [
      "Comprehensive EDA revealing key smoking & BMI cost correlations",
      "Feature engineering and polynomial feature transforms for non-linear fit",
      "Interactive Streamlit app with real-time cost estimations",
      "Cross-validated evaluation with minimal RMSE score"
    ],
    metrics: [
      { label: "R² Score", value: "0.86" },
      { label: "MAE Reduction", value: "24%" },
      { label: "Feature Set", value: "12 Features" }
    ]
  },
  {
    id: "weather-forecasting-application",
    number: "04",
    title: "Weather Forecasting Application",
    subtitle: "Real-time Meteorological Analytics Dashboard",
    description: "Responsive weather application that provides real-time weather information using an external weather API.",
    fullDescription: "A modern weather dashboard built with React and custom CSS modules. Fetches multi-day forecasts, hourly precipitation data, atmospheric pressure, and interactive temperature trends with dynamic day/night ambient color themes.",
    image: "/assets/images/weather_app.png",
    technologies: ["React", "API", "CSS", "JavaScript"],
    githubUrl: "https://github.com/SobhiyaTech/Weather-Forecast",
    liveDemoUrl: "https://weather-live-sobhiya.vercel.app",
    category: "Web Development",
    featured: false,
    highlights: [
      "Geolocation auto-detection & global city search query integration",
      "5-day forecast visualization with micro-animations",
      "Clean dark-mode glassmorphic widget layout",
      "Debounced API query handler for optimized network calls"
    ],
    metrics: [
      { label: "API Refresh Rate", value: "Real-time" },
      { label: "Lighthouse Score", value: "98/100" }
    ]
  },
  {
    id: "ecommerce-website",
    number: "05",
    title: "E-Commerce Website",
    subtitle: "Modern Digital Hardware & Electronics Store",
    description: "Responsive e-commerce website with product browsing and modern user interface.",
    fullDescription: "A sleek, responsive storefront interface designed for high-end developer peripherals and gadget showcase. Features client-side cart management, filterable product grids, quick modal preview, and mobile drawer navigation.",
    image: "/assets/images/ecommerce_app.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/sobhiya-dev/modern-ecommerce-store",
    liveDemoUrl: "https://sobhiya-ecommerce.vercel.app",
    category: "Web Development",
    featured: false,
    highlights: [
      "Custom CSS Grid & Flexbox layout with zero external framework overhead",
      "Dynamic cart counter and interactive local-storage persistence",
      "Fully responsive navigation drawer for mobile viewport",
      "Smooth CSS transitions and product hover card elevations"
    ],
    metrics: [
      { label: "Load Time", value: "0.6s" },
      { label: "Mobile Responsive", value: "100%" }
    ]
  }
];
