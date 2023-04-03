export const config = {
  "dev": {
    "username": "postgres",
    "password": "Tranloi1",
    "database": "udagramdatabase",
    "host": "udagramdatabase.csoas8gzch40.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
    "url": "a99099a184fdd4726a95203dba879ec4-775028303.us-east-1.elb.amazonaws.com:8000"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
