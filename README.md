# Peadbo Expo App
This is a React Native application built with Expo, leveraging Apollo GraphQL (via AWS Amplify) and AI integration (via OpenAI API). The app provides user authentication, chatbot functionality, and a newsletter system, supporting user profiles, advisor selection, and dynamic routing.

## 📦 Features
📸 Authentication: Sign up and Login/out in with profile image upload and editable bio.

📬 Newsletter System: Template-based AI-generated content powered by OpenAI.

💬 Chatbot: AI chatbot visible on specific screens.

📚 GraphQL Integration: Backend powered by AWS Amplify with Apollo GraphQL.

🗺️ Dynamic Navigation: Screen parameters with default values for smoother UX.

🎨 Theming: Toggle between themes, with persistent state via context.

## 🗂️ Directory Structure
```
├── .vscode/                  # Editor settings
├── amplify/                  # Amplify CLI backend config
├── assets/                   # Static assets (e.g. icons, images)
├── auth/                     # Auth-related utilities and screens
├── components/               # Reusable UI components
├── screens/                  # Application screens
├── src/graphql/              # GraphQL queries and mutations
├── App.js                    # Entry point, connects to database
├── AppContainer.js           # App wrapper, manages global state
├── AuthManager.js            # Handles signout and user session
├── OpenAIService.js          # AI template logic
├── ThemeContext.js           # Theme state and toggling logic
├── Reducer.js                # App state reducer
├── app.json                  # Expo configuration
├── .graphqlconfig.yml        # GraphQL config for tools
├── package.json              # Project metadata and dependencies
```

## 🛠️ Setup
#### 1 Prerequisites
- Node.js (v18 or above)
- Yarn or npm
```bash
npm install expo
```

#### 2 Installation
```bash
git clone https://github.com/billbillbilly/team_peadbo.git
cd team_peadbo
npm install
```

#### 3 Running the App
```bash
npx expo start
```

## ⚙️ Configuration
- Amplify config
- OpenAI API Key
