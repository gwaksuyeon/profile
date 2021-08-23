pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install -g yarn"
                sh "sudo yarn install"
                sh "sudo yarn build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/profile"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/profile/"
            }
        }
    }
}