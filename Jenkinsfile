#!groovy

pipeline {
  agent any

  tools { nodejs "NodeJS" }

  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }

  environment {
    CHROME_BIN = '/usr/bin/google-chrome-stable'
    NEXUS_HOST_DOCKER = 'nexus-docker.trdi.io'
    NEXUS_CREDENTIALS = credentials('nexus-admin-login')
  }

  stages {
    stage('Dependencies') {
      steps {
        sh "echo ${NEXUS_HOST_DOCKER}"
        sh 'npm i'
      }
    }

    stage('Unit Tests') {
      steps {
        echo 'Karma unit testing with headless chrome'
        sh 'npm run test-headless'
      }
    }
    stage('e2e Tests') {
      steps {
        echo 'Cypress integration test ....'
        sh 'npm run cy:ci'
      }
    }
    stage('Login to Docker') {
      when {
        anyOf {
          branch 'dev'
          branch 'develop'
          branch 'master'
          branch 'main'
        }
      }
      steps {
        echo 'Login to Docker with nexus credentials ...'

        sh "echo ${NEXUS_CREDENTIALS_PSW} | docker login -u ${NEXUS_CREDENTIALS_USR} --password-stdin ${NEXUS_HOST_DOCKER}"
      }
    }


    stage('Build Container') {
      when {
        anyOf {
          branch 'dev'
          branch 'develop'
          branch 'master'
          branch 'main'
        }
      }
      steps {
        echo 'Build the container  ...'
        sh 'npm run docker-build'
      }
    }

    stage('Deploy Development Version') {
      when {
        anyOf {
          branch 'dev'
          branch 'develop'
        }
      }
      steps {
        echo 'Deploying to latest'
        sh 'npm run var'
        sh 'npm run docker-push-latest'
        sh 'npm run docker-logout'

      }
    }

    stage('Deploy Production Version') {
      when {
        anyOf {
          branch 'master'
          branch 'main'
        }
      }
      steps {
        echo 'Deploying for'
        sh 'npm run var'
        sh 'npm run docker-push-latest'
        sh 'npm run docker-tag-latest-to-prod'
        sh 'npm run docker-push-prod'

      }
    }
  }

  post {
    always {
      sh 'docker logout'
    }
  }
}
