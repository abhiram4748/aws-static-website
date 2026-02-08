AWS Static Website Hosting using Amazon S3 and CloudFront

📖 Project Description

This project demonstrates how to deploy a static website using Amazon Web Services (AWS).
The website is hosted using **Amazon S3 (Simple Storage Service)** and delivered securely over the internet using **AWS CloudFront CDN** with HTTPS support.

The application contains only static content such as HTML, CSS, JavaScript, and images. No backend server or database is required.

---

🎯 Objectives

* Understand cloud-based website hosting
* Learn Amazon S3 static website hosting
* Configure public access permissions
* Implement CDN using CloudFront
* Enable secure HTTPS access
* Maintain project using Git and GitHub

---

🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Amazon S3
* AWS CloudFront
* AWS IAM Policies
* Git
* GitHub

---

⚙️ AWS Services Used

1. Amazon S3

Amazon S3 is used to store and host the website files.
The S3 bucket acts as a web server for static content.

2. AWS CloudFront

CloudFront is a Content Delivery Network (CDN) that distributes website content globally and provides HTTPS secure access.

3. AWS IAM

IAM policies are used to allow public read access to the S3 bucket objects.

---

🚀 Deployment Procedure

1. Created an S3 bucket in AWS
2. Disabled "Block Public Access"
3. Uploaded website files (index.html, CSS, JS, images)
4. Enabled Static Website Hosting
5. Set index document as `index.html`
6. Added bucket policy to allow public read access
7. Generated website endpoint
8. Created CloudFront distribution
9. Linked CloudFront to S3 website endpoint
10. Accessed website using HTTPS URL

---

🌐 Live Website Link

CloudFront URL:

(Example: [http//:cloudfront.net](dt7o47zvx0o4o.cloudfront.net))

---

📂 Project Folder Structure

aws-static-website/
│
├── index.html
├── style.css
├── script.js
├── images/
├── screenshots/
│   ├── s3-bucket.png
│   ├── static-hosting.png
│   ├── bucket-policy.png
│   ├── cloudfront-distribution.png
│   └── https-website.png
└── README.md

---

📸 Screenshots

All AWS configuration screenshots are available in the **screenshots** folder, including:

* S3 bucket objects
* Static website hosting configuration
* Bucket policy permissions
* CloudFront distribution
* Website running with HTTPS

---

🔐 Security Configuration

A bucket policy was added to allow public read access:

{
"Version": "2012-10-17",
"Statement": [
{
"Sid": "PublicReadGetObject",
"Effect": "Allow",
"Principal": "*",
"Action": "s3:GetObject",
"Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
}
]
}

---

📊 Advantages of This Architecture

* Serverless hosting (no EC2 required)
* Highly scalable
* Low cost
* High availability
* Fast loading via CDN
* Secure HTTPS connection

---

🎓 Learning Outcomes

* Learned how cloud storage can act as a web server
* Understood the difference between static and dynamic websites
* Gained experience with AWS S3 and CloudFront
* Implemented public access policies
* Used GitHub for version control

---

👤 Author

>Abhiram
GitHub: [(https://github.com/abhiram4748)]

---

📌 Conclusion

This project successfully demonstrates hosting a static website using AWS S3 and delivering it securely through CloudFront CDN. It shows how cloud services can replace traditional web hosting servers for static applications.

---

📄 Note

This project was developed as an academic minor project for learning cloud computing and deployment concepts.
