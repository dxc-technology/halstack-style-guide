pipeline {
    agent {
      dockerfile {
        args '-u root:root'
        filename 'Dockerfile'
        reuseNode true
      }
    }
    stages {
        stage('.npmrc') {
          steps {
            // Insert .npmrc
            withCredentials([file(credentialsId: 'npmrc', variable: 'CONFIG')]) {
                sh '''
                    cat ${CONFIG} > ~/.npmrc
                '''
            }
          }
        }
        stage ('Zipping Components Folder') {
            steps {
               sh '''
                    rm -rf components.zip
                '''
                zip zipFile: 'components.zip', archive: false, dir: './components'
            }
        }
        stage('Deploy to S3 Bucket') {
            when { branch 'development' }
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'DIAAS-AWS-CLI',
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
                ]]) {
                    withAWS(role:"arn:aws:iam::665158502186:role/ISS_DIAAS_PowerUser"){
                        sh '''
                            aws s3 rm s3://design.system.components.catalog/components/ --recursive
                            aws s3 cp ./components/ s3://design.system.components.catalog/components/ --recursive
                        '''
                    }
                }
            }
        }
    }
}
