'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getProjects } from '@/lib/db';
import { ExternalLink, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const allCategories = ['All', 'IoT / Embedded', 'Machine Learning', 'Web Application', 'Computer Vision', 'Mobile App', 'Robotics'];

const fallbackProjects = [
    { id: '1', title: 'Smart Attendance System', category: 'Computer Vision', description: 'Facial recognition attendance with OpenCV and Flask dashboard.', tags: ['Python', 'OpenCV', 'RPi', 'Flask'], emoji: '🎯', price: 4500 },
    { id: '2', title: 'Crop Disease Detector', category: 'Machine Learning', description: 'CNN-based leaf disease detection with 94% accuracy.', tags: ['TensorFlow', 'Python', 'FastAPI', 'Flutter'], emoji: '🌱', price: 5500 },
    { id: '3', title: 'Smart Irrigation', category: 'IoT / Embedded', description: 'Arduino + soil sensor system with cloud monitoring app.', tags: ['Arduino', 'MQTT', 'Firebase', 'React'], emoji: '💧', price: 3500 },
    { id: '4', title: 'Traffic Flow Analyzer', category: 'Computer Vision', description: 'Real-time vehicle counting with YOLOv8 and analytics.', tags: ['YOLOv8', 'Python', 'Django', 'PostgreSQL'], emoji: '🚦', price: 6000 },
    { id: '5', title: 'E-Waste Portal', category: 'Web Application', description: 'Full-stack platform for certified e-waste recycling with rewards.', tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'], emoji: '♻️', price: 4000 },
    { id: '6', title: 'Student Result System', category: 'Web Application', description: 'Role-based result management for admin, faculty, and students.', tags: ['React', 'Spring Boot', 'MySQL', 'JWT'], emoji: '📊', price: 3500 },
    { id: '7', title: 'Autonomous Robot Navigation', category: 'Robotics', description: 'PID-controlled robot with ultrasonic sensors and Bluetooth control.', tags: ['Arduino', 'C++', 'ROS', 'Python'], emoji: '🤖', price: 7500 },
    { id: '8', title: 'Health Monitoring App', category: 'Mobile App', description: 'IoT wearable + Flutter app tracking heart rate, temperature.', tags: ['Flutter', 'Firebase', 'Arduino', 'ML'], emoji: '❤️', price: 6500 },
    { id: '9', title: 'Voice-Controlled Home', category: 'IoT / Embedded', description: 'ESP32-based home automation triggered by voice + mobile app.', tags: ['ESP32', 'Python', 'React Native', 'MQTT'], emoji: '🏠', price: 4500 },
    { id: '10', title: 'Smart Parking System', category: 'IoT / Embedded', description: 'Automated parking spot detection using IR sensors and web dashboard.', tags: ['ESP8266', 'React', 'Firebase', 'C++'], emoji: '🅿️', price: 3800 },
    { id: '11', title: 'Weather Station', category: 'IoT / Embedded', description: 'Real-time climate monitoring with DHT11, BMP180 and ThingSpeak.', tags: ['NodeMCU', 'ThingSpeak', 'Sensors'], emoji: '⛅', price: 2500 },
    { id: '12', title: 'RFID Toll Collection', category: 'IoT / Embedded', description: 'Automated toll deduction system using RFID tags and servo motors.', tags: ['Arduino', 'RFID', 'Servo', 'LCD'], emoji: '🛣️', price: 3200 },
    { id: '13', title: 'Fire Detection System', category: 'IoT / Embedded', description: 'Early warning system with smoke/gas sensors and SMS alerts.', tags: ['GSM Module', 'Arduino', 'MQ2'], emoji: '🔥', price: 2900 },
    { id: '14', title: 'Air Quality Monitor', category: 'IoT / Embedded', description: 'Portable AQI monitor displaying PM2.5 and CO2 levels on OLED.', tags: ['ESP32', 'OLED', 'MQ135'], emoji: '🌫️', price: 3500 },
    { id: '15', title: 'Smart Dustbin', category: 'IoT / Embedded', description: 'Auto-opening lid with ultrasonic sensor and garbage level alerts.', tags: ['Arduino', 'Ultrasonic', 'Servo'], emoji: '🗑️', price: 2200 },
    { id: '16', title: 'Fake News Detection', category: 'Machine Learning', description: 'NLP model to classify news articles as real or fake using TF-IDF.', tags: ['Python', 'Scikit-learn', 'NLP', 'Flask'], emoji: '📰', price: 4000 },
    { id: '17', title: 'Credit Card Fraud Detection', category: 'Machine Learning', description: 'Anomaly detection model to identify fraudulent transactions.', tags: ['Random Forest', 'Pandas', 'Streamlit'], emoji: '💳', price: 4500 },
    { id: '18', title: 'Movie Recommendation', category: 'Machine Learning', description: 'Collaborative filtering recommender system for movies.', tags: ['Python', 'Collaborative Filtering'], emoji: '🎬', price: 3800 },
    { id: '19', title: 'Stock Price Predictor', category: 'Machine Learning', description: 'LSTM neural network to predict future stock prices based on history.', tags: ['Keras', 'LSTM', 'Python', 'Finance'], emoji: '📈', price: 5500 },
    { id: '20', title: 'Customer Churn Prediction', category: 'Machine Learning', description: 'Predicts which customers are likely to leave a subscription service.', tags: ['XGBoost', 'Data Science', 'Flask'], emoji: '📉', price: 4200 },
    { id: '21', title: 'Handwritten Digit Recognition', category: 'Machine Learning', description: 'Classic MNIST digit recognizer with a canvas drawing web interface.', tags: ['CNN', 'TensorFlow', 'React'], emoji: '✍️', price: 3500 },
    { id: '22', title: 'House Price Prediction', category: 'Machine Learning', description: 'Regression model estimating property values based on location/features.', tags: ['Linear Regression', 'Python'], emoji: '🏡', price: 3000 },
    { id: '23', title: 'Heart Disease Prediction', category: 'Machine Learning', description: 'Classification model diagnosing heart risk based on patient metrics.', tags: ['SVM', 'Scikit-learn', 'Streamlit'], emoji: '🫀', price: 4000 },
    { id: '24', title: 'E-Commerce Platform', category: 'Web Application', description: 'Full-stack shopping site with cart, payments, and admin panel.', tags: ['Next.js', 'Stripe', 'Prisma', 'Tailwind'], emoji: '🛒', price: 8000 },
    { id: '25', title: 'Library Management System', category: 'Web Application', description: 'Digital catalog for issuing and returning books with fine calculation.', tags: ['PHP', 'MySQL', 'Bootstrap'], emoji: '📚', price: 3500 },
    { id: '26', title: 'Hospital Management System', category: 'Web Application', description: 'Patient records, doctor appointments, and billing management.', tags: ['MERN Stack', 'React', 'Node.js'], emoji: '🏥', price: 6500 },
    { id: '27', title: 'Online Quiz Portal', category: 'Web Application', description: 'Platform for teachers to create MCQs and students to take tests.', tags: ['Django', 'Python', 'SQLite'], emoji: '📝', price: 4000 },
    { id: '28', title: 'Job Portal', category: 'Web Application', description: 'Connects recruiters and job seekers with resume uploading.', tags: ['Vue.js', 'Laravel', 'MySQL'], emoji: '💼', price: 5500 },
    { id: '29', title: 'Alumni Networking Site', category: 'Web Application', description: 'Social platform exclusively for college alumni to connect.', tags: ['React', 'Firebase', 'Tailwind'], emoji: '🎓', price: 4500 },
    { id: '30', title: 'Event Management System', category: 'Web Application', description: 'Book tickets and manage event schedules and speakers.', tags: ['Next.js', 'PostgreSQL', 'Vercel'], emoji: '🎟️', price: 5000 },
    { id: '31', title: 'Mask Detection System', category: 'Computer Vision', description: 'Detects if a person is wearing a face mask via webcam.', tags: ['OpenCV', 'Deep Learning', 'Python'], emoji: '😷', price: 4500 },
    { id: '32', title: 'License Plate Recognition', category: 'Computer Vision', description: 'Extracts text from vehicle license plates for automated logging.', tags: ['OpenCV', 'Tesseract OCR', 'Python'], emoji: '🚗', price: 5500 },
    { id: '33', title: 'Driver Drowsiness Detection', category: 'Computer Vision', description: 'Alerts the driver if their eyes remain closed for too long.', tags: ['dlib', 'OpenCV', 'Python'], emoji: '😴', price: 5000 },
    { id: '34', title: 'Object Detection for Blind', category: 'Computer Vision', description: 'Identifies objects in front of camera and speaks them out loud.', tags: ['YOLO', 'gTTS', 'Python'], emoji: '🦯', price: 6000 },
    { id: '35', title: 'Emotion Recognition', category: 'Computer Vision', description: 'Classifies human facial expressions into 7 emotion categories.', tags: ['Keras', 'OpenCV', 'CNN'], emoji: '😊', price: 4800 },
    { id: '36', title: 'Gesture Controlled Mouse', category: 'Computer Vision', description: 'Control computer cursor using hand gestures without a physical mouse.', tags: ['MediaPipe', 'OpenCV', 'PyAutoGUI'], emoji: '🖐️', price: 4500 },
    { id: '37', title: 'Sign Language Translator', category: 'Computer Vision', description: 'Translates hand sign language into text and speech in real-time.', tags: ['MediaPipe', 'LSTM', 'Python'], emoji: '🤟', price: 6500 },
    { id: '38', title: 'Expense Tracker App', category: 'Mobile App', description: 'Cross-platform app to track daily spending and visualize budgets.', tags: ['React Native', 'Expo', 'SQLite'], emoji: '💰', price: 4000 },
    { id: '39', title: 'Fitness Workout App', category: 'Mobile App', description: 'Customizable workout routines and progress tracking charts.', tags: ['Flutter', 'Dart', 'Firebase'], emoji: '🏋️', price: 5000 },
    { id: '40', title: 'Recipe Sharing App', category: 'Mobile App', description: 'Social app to post, like, and save cooking recipes.', tags: ['Android', 'Java', 'Firebase'], emoji: '🍳', price: 4500 },
    { id: '41', title: 'Task Manager App', category: 'Mobile App', description: 'To-do list with reminders, categories, and calendar view.', tags: ['Swift', 'iOS', 'CoreData'], emoji: '✅', price: 4000 },
    { id: '42', title: 'Weather Forecast App', category: 'Mobile App', description: 'Beautiful UI for current weather and 7-day forecasts via API.', tags: ['React Native', 'OpenWeatherAPI'], emoji: '🌦️', price: 3000 },
    { id: '43', title: 'E-Learning App', category: 'Mobile App', description: 'Video courses, quizzes, and certificate generation for students.', tags: ['Flutter', 'Node.js', 'AWS S3'], emoji: '📱', price: 7000 },
    { id: '44', title: 'Line Follower Robot', category: 'Robotics', description: 'Autonomous robot that follows a black line on a white surface.', tags: ['Arduino', 'IR Sensors', 'Motors'], emoji: '🏎️', price: 2500 },
    { id: '45', title: 'Obstacle Avoidance Robot', category: 'Robotics', description: 'Navigates rooms by detecting and dodging objects in its path.', tags: ['Arduino', 'Ultrasonic', 'L298N'], emoji: '🤖', price: 2800 },
    { id: '46', title: 'Robotic Arm', category: 'Robotics', description: '4-DOF robotic arm controlled via potentiometers or web app.', tags: ['Servo Motors', 'ESP32', '3D Printed'], emoji: '🦾', price: 6000 },
    { id: '47', title: 'Fire Fighting Robot', category: 'Robotics', description: 'Detects fire using flame sensors and extinguishes it with a water pump.', tags: ['Arduino', 'Flame Sensor', 'Pump'], emoji: '🚒', price: 5500 },
    { id: '48', title: 'Surveillance Rover', category: 'Robotics', description: 'Wi-Fi controlled rover with live camera feed for monitoring.', tags: ['Raspberry Pi', 'Camera', 'Python'], emoji: '👀', price: 6500 },
    { id: '49', title: 'Hexapod Robot', category: 'Robotics', description: 'Spider-like robot with 6 legs capable of complex walking gaits.', tags: ['Arduino Mega', 'Servos', 'Inverse Kinematics'], emoji: '🕷️', price: 8500 },
    { id: '50', title: 'Self-Balancing Robot', category: 'Robotics', description: 'Two-wheeled robot that stays upright using an IMU and PID controller.', tags: ['MPU6050', 'PID', 'Arduino'], emoji: '⚖️', price: 5000 },
];

export default function ProjectsPage() {
    const [projects, setProjects] = useState(fallbackProjects);
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProjects()
            .then((data) => { if (data.length) setProjects(data); })
            .catch(() => { }) // fallback to static data
            .finally(() => setLoading(false));
    }, []);

    const filtered = projects.filter((p) => {
        const matchCat = activeCategory === 'All' || p.category === activeCategory;
        const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()));
        return matchCat && matchSearch;
    });

    return (
        <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #070d1b 0%, #0a1225 100%)' }}>
            {/* Hero */}
            <div className="pt-28 pb-16 text-center px-6" style={{ background: 'linear-gradient(180deg, #0e1a33 0%, #070d1b 100%)' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="section-tag mb-5 mx-auto inline-flex">Our Portfolio</div>
                    <h1 className="section-heading mb-4">Project <span className="text-gradient">Showcase</span></h1>
                    <p className="text-slate-400 text-lg">Browse our delivered engineering projects. All available for custom development.</p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-24">
                {/* Search + Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input value={search} onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search projects or tech stack..."
                            className="input-dark pl-10 w-full" />
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {allCategories.map((cat) => (
                            <button key={cat} onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-primary-400 text-white shadow-glow-sm'
                                        : 'glass text-slate-400 hover:text-white hover:bg-white/10'
                                    }`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Count */}
                <p className="text-slate-600 text-sm mb-6">{filtered.length} project{filtered.length !== 1 ? 's' : ''} found</p>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((p, i) => (
                        <motion.div key={p.id}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }} transition={{ delay: i * 0.05, duration: 0.4 }}
                            whileHover={{ y: -6 }} className="group glass rounded-2xl overflow-hidden cursor-pointer">
                            <div className="h-28 bg-gradient-to-br from-primary-600/40 to-blue-900/40 flex items-center justify-center relative">
                                <span className="text-4xl drop-shadow-lg">{p.emoji || '📁'}</span>
                                {p.price && <span className="absolute top-3 right-3 px-2.5 py-1 bg-primary-400/20 text-primary-400 text-xs font-bold rounded-lg">From ₹{p.price?.toLocaleString()}</span>}
                            </div>
                            <div className="p-5">
                                <span className="tech-tag mb-3 inline-block text-xs">{p.category}</span>
                                <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-primary-400 transition-colors">{p.title}</h3>
                                <p className="text-slate-400 text-sm mb-3 leading-relaxed line-clamp-2">{p.description}</p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {p.tags?.map((t) => <span key={t} className="px-2 py-0.5 bg-white/5 text-slate-500 text-xs rounded-md">{t}</span>)}
                                </div>
                                <Link href="#contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-400 hover:gap-2.5 transition-all">
                                    Request This <ExternalLink size={12} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-slate-500">
                        <p className="text-lg mb-2">No projects found.</p>
                        <Link href="#contact" className="btn-sm inline-block mt-4">Request Custom Project</Link>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
