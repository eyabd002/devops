pipeline {
    agent any
    options { timestamps() }

    environment {
        IMAGE = "YOUR_DOCKERHUB_USERNAME/viteapp"
        TAG   = "build-${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps { checkout scm }
        }

        stage('Install Dependencies') {
            steps {
                bat "npm install"
            }
        }

        stage('Build React App') {
            steps {
                bat "npm run build"
            }
        }

        stage('Docker Build') {
            steps {
                bat "docker build -t %IMAGE%:%TAG% ."
            }
        }

        stage('Smoke Test') {
            steps {
                bat """
                docker rm -f vite_test 2>nul || ver>nul
                docker run -d --name vite_test -p 8081:80 %IMAGE%:%TAG%
                ping -n 4 127.0.0.1 >nul
                curl -I http://localhost:8081 | find "200 OK"
                docker rm -f vite_test
                """
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    bat """
                    echo %PASS% | docker login -u %USER% --password-stdin
                    docker tag %IMAGE%:%TAG% %IMAGE%:latest
                    docker push %IMAGE%:%TAG%
                    docker push %IMAGE%:latest
                    """
                }
            }
        }
    }

    post {
        success { echo "Pipeline SUCCESS" }
        failure { echo "Pipeline FAILED" }
    }
}
