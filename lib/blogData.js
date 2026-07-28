export const blogs = [
    {
        slug: 'getting-started-with-esp32',
        title: 'Getting Started with ESP32: The Ultimate Guide for IoT Projects',
        excerpt: 'Learn how to set up, program, and build your first IoT project using the powerful ESP32 microcontroller.',
        category: 'IoT / Embedded',
        tags: ['ESP32', 'IoT', 'Arduino IDE', 'C++'],
        author: 'ProtoBuild Engineering Team',
        date: 'Oct 12, 2025',
        readTime: '8 min read',
        coverGradient: 'from-blue-600 to-cyan-400',
        content: `
The ESP32 is arguably the most popular microcontroller for IoT development today. Designed by Espressif Systems, it packs built-in Wi-Fi and dual-mode Bluetooth, making it incredibly versatile for engineering students and hobbyists alike.

## Why Choose the ESP32 over Arduino Uno?

While the Arduino Uno is fantastic for absolute beginners, it lacks native internet connectivity. If you want to build a "Smart" device, you need the internet. The ESP32 not only provides Wi-Fi and Bluetooth, but it also features a dual-core processor running at 160MHz or 240MHz, vastly outperforming the Uno's 16MHz clock speed. 

Furthermore, the ESP32 has far more memory (SRAM and Flash), allowing you to run complex algorithms, serve web pages, and connect to cloud services like AWS IoT, Firebase, and MQTT brokers.

## Setting Up Your Environment

To program the ESP32, you can use the familiar Arduino IDE:
1. Open the Arduino IDE.
2. Go to **File > Preferences**.
3. In the "Additional Board Manager URLs" field, paste: \`https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json\`
4. Go to **Tools > Board > Boards Manager**, search for "esp32", and install it.

## Your First Project: Blinking an LED over Wi-Fi

The true power of the ESP32 lies in its connectivity. Let's look at the basic structure of connecting to a Wi-Fi network:

\`\`\`cpp
#include <WiFi.h>

const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("");
  Serial.println("WiFi connected!");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Your IoT logic here
}
\`\`\`

## Conclusion
The ESP32 is a beast of a microcontroller. Whether you are building a smart agriculture system, a home automation hub, or a wireless sensor network for your final year project, the ESP32 is the perfect brain for the operation.
        `
    },
    {
        slug: 'top-5-machine-learning-algorithms',
        title: 'Top 5 Machine Learning Algorithms for Final Year Projects',
        excerpt: 'Stuck on choosing a machine learning model? Here are the 5 most effective algorithms guaranteed to impress your examiners.',
        category: 'Machine Learning',
        tags: ['Machine Learning', 'Python', 'Data Science', 'Algorithms'],
        author: 'ProtoBuild AI Team',
        date: 'Oct 15, 2025',
        readTime: '6 min read',
        coverGradient: 'from-purple-600 to-pink-500',
        content: `
Choosing the right machine learning algorithm can make or break your final year engineering project. You want something complex enough to secure good marks, but practical enough to run on a standard laptop. 

Here are the top 5 machine learning algorithms you should consider for your projects.

## 1. Random Forest (Ensemble Learning)
**Best for:** Credit card fraud detection, predictive maintenance, and structured data classification.

Random Forest builds multiple decision trees and merges them together to get a more accurate and stable prediction. It is highly resilient to overfitting and requires very little hyperparameter tuning, making it perfect for student projects.

## 2. Convolutional Neural Networks (CNNs)
**Best for:** Computer vision, image classification, and medical imaging.

If you are working with images (e.g., Plant Disease Detection, Mask Detection, Tumor Classification), CNNs are the gold standard. Using frameworks like TensorFlow or PyTorch, you can easily implement architectures like ResNet50 or VGG16 via transfer learning.

## 3. Support Vector Machines (SVM)
**Best for:** High-dimensional data and text classification.

SVMs are incredible for classification tasks where there is a clear margin of separation. They are widely used in bioinformatics, face detection, and text categorization (like Spam Detection).

## 4. Long Short-Term Memory Networks (LSTMs)
**Best for:** Time-series forecasting and Natural Language Processing (NLP).

LSTMs are a special kind of Recurrent Neural Network (RNN) capable of learning long-term dependencies. They are the go-to choice for Stock Price Prediction, Weather Forecasting, and Speech Recognition projects.

## 5. K-Means Clustering
**Best for:** Customer segmentation, anomaly detection, and unsupervised learning.

If your dataset doesn't have labels (unsupervised learning), K-Means is a fantastic clustering algorithm. It partitions your data into 'K' distinct, non-overlapping subgroups.

## Final Advice
Don't just pick the most complex algorithm. The best projects solve a real-world problem using the *appropriate* tool. A well-implemented Random Forest that solves a local agricultural issue will score much higher than a poorly implemented Deep Neural Network.
        `
    },
    {
        slug: 'building-rest-apis-with-nextjs',
        title: 'Building Scalable REST APIs with Next.js 14',
        excerpt: 'Discover how to leverage Next.js App Router to build fast, secure, and scalable backend APIs alongside your frontend.',
        category: 'Web Application',
        tags: ['Next.js', 'React', 'API', 'Web Dev'],
        author: 'Naveen Kumar K M',
        date: 'Oct 20, 2025',
        readTime: '10 min read',
        coverGradient: 'from-emerald-500 to-teal-400',
        content: `
Next.js is no longer just a frontend framework. With the introduction of the App Router, building full-stack applications has never been easier. Today, we'll explore how to build scalable REST APIs using Next.js Route Handlers.

## What are Route Handlers?

Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs. They replace the old API Routes from the Pages directory and are defined inside a \`route.js\` or \`route.ts\` file.

## Creating Your First Endpoint

Let's create a simple API endpoint that fetches a list of users from a database. Create a file at \`app/api/users/route.js\`:

\`\`\`javascript
import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Assume you have a database connection setup

export async function GET(request) {
  try {
    const users = await db.query('SELECT * FROM users');
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
\`\`\`

## Handling POST Requests

To handle data submission (like creating a new user), you simply export a \`POST\` function in the same file:

\`\`\`javascript
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email } = body;
    
    // Validate the data
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }
    
    // Insert into database
    const newUser = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    
    return NextResponse.json({ message: 'User created successfully', id: newUser.insertId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
\`\`\`

## Security Best Practices

When building APIs in Next.js, keep these security tips in mind:
1. **Never expose secrets:** Ensure your database credentials and API keys are stored in \`.env.local\` and never prefixed with \`NEXT_PUBLIC_\`.
2. **Rate Limiting:** Implement rate limiting using middleware to prevent abuse.
3. **Authentication:** Verify JWT tokens or session cookies at the beginning of your Route Handler before accessing sensitive database queries.

Next.js gives you the power of a Node.js server seamlessly integrated into your React application!
        `
    },
    {
        slug: 'introduction-to-yolo-object-detection',
        title: 'Introduction to YOLO: Real-time Object Detection Explained',
        excerpt: 'Understand how the YOLO (You Only Look Once) algorithm revolutionised computer vision and how to use it in your projects.',
        category: 'Computer Vision',
        tags: ['YOLO', 'OpenCV', 'Computer Vision', 'Deep Learning'],
        author: 'ProtoBuild CV Team',
        date: 'Oct 25, 2025',
        readTime: '7 min read',
        coverGradient: 'from-orange-500 to-amber-400',
        content: `
Object detection is a critical field in Computer Vision that involves not only recognizing what objects are in an image but also locating exactly where they are. Before YOLO (You Only Look Once), object detection systems like R-CNN were incredibly slow because they required passing the image through a classifier thousands of times.

YOLO completely changed the game.

## How YOLO Works

The name "You Only Look Once" perfectly describes its architecture. Instead of scanning the image multiple times, a single neural network is applied to the full image. 

1. **Grid Division:** YOLO divides the input image into an S x S grid.
2. **Bounding Boxes:** Each grid cell predicts bounding boxes and confidence scores for those boxes.
3. **Class Probabilities:** Each grid cell simultaneously predicts class probabilities.
4. **Non-Max Suppression:** Finally, it applies non-max suppression to eliminate duplicate detections, outputting the final bounding boxes.

This single-pass approach makes YOLO astonishingly fast—capable of processing video streams in real-time (45+ frames per second).

## Versions of YOLO
YOLO has evolved significantly since its inception:
- **YOLOv1 to YOLOv3:** The classic architectures developed by Joseph Redmon.
- **YOLOv4 & YOLOv5:** Introduced massive optimizations in speed and accuracy.
- **YOLOv8 & YOLOv10 (Ultralytics):** The current state-of-the-art, offering an incredibly easy-to-use Python API and support for segmentation and pose estimation.

## Implementing YOLOv8 in Python

Using YOLOv8 in your final year project is surprisingly simple thanks to the \`ultralytics\` library.

\`\`\`python
from ultralytics import YOLO
import cv2

# Load a pretrained YOLOv8 model
model = YOLO('yolov8n.pt') 

# Open the webcam
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    
    # Run inference on the frame
    results = model(frame)
    
    # Plot the bounding boxes on the frame
    annotated_frame = results[0].plot()
    
    # Display the frame
    cv2.imshow("YOLOv8 Detection", annotated_frame)
    
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
\`\`\`

With just 15 lines of code, you have a fully functional, real-time object detection system running on your webcam!
        `
    },
    {
        slug: 'flutter-vs-react-native-2025',
        title: 'Flutter vs React Native: Which Should You Learn in 2025?',
        excerpt: 'A comprehensive comparison of the two dominant cross-platform mobile development frameworks.',
        category: 'Mobile App',
        tags: ['Flutter', 'React Native', 'Mobile Dev', 'Dart'],
        author: 'ProtoBuild Mobile Team',
        date: 'Nov 2, 2025',
        readTime: '9 min read',
        coverGradient: 'from-rose-500 to-red-400',
        content: `
When building a mobile app for your engineering project, you generally don't have the time to learn both Swift (for iOS) and Kotlin (for Android). Cross-platform frameworks allow you to write a single codebase that runs on both operating systems.

The two titans of this industry are **Flutter** (by Google) and **React Native** (by Meta). But which one should you choose in 2025?

## 1. Performance
**Winner: Flutter**

Flutter compiles its Dart code directly into native ARM machine code using the Skia (or newer Impeller) rendering engine. This means Flutter apps are blazingly fast and hit 60-120 FPS consistently. 

React Native, on the other hand, uses a JavaScript bridge to communicate with native components. While the new architecture (Fabric) has improved this significantly, Flutter still holds the raw performance edge, especially for complex animations.

## 2. Developer Experience and Ecosystem
**Winner: React Native**

React Native uses JavaScript and React. If you already know web development, you can start building mobile apps in React Native immediately. The ecosystem is massive, and you can leverage thousands of existing NPM packages.

Flutter uses Dart, an object-oriented language that is easy to learn (especially if you know Java or C++), but it's an entirely new ecosystem. 

## 3. UI and Customization
**Winner: Tie (Depends on your goal)**

Flutter draws every single pixel on the screen itself. This means your app will look 100% identical on an iPhone and an Android phone. It is incredible for custom, highly-branded UIs.

React Native maps your code to actual native UI components (a React \`<View>\` becomes an iOS \`UIView\`). This means your app will look and feel like a native iOS app on an iPhone, and a native Android app on Android.

## Conclusion for Students

- **Choose React Native IF:** You already know React/Next.js, or you are building an app heavily reliant on existing web libraries.
- **Choose Flutter IF:** You want to build beautiful, highly-customized UIs, you want the best possible performance, or you want to deploy the exact same codebase to Web, Windows, macOS, Android, and iOS.

For most engineering hardware projects (like an IoT dashboard app), either framework is more than capable!
        `
    }
];
