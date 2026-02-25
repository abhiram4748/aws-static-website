# 🌐 Static Website Hosting on AWS (Amazon S3 + CloudFront)

A cloud computing project demonstrating deployment of a static website using **Amazon S3** for storage and **AWS CloudFront** as a Content Delivery Network (CDN) to provide secure HTTPS access and faster global delivery.

---

## 📌 Project Overview

This project shows how traditional web hosting can be replaced by cloud infrastructure.
Instead of using a web server, the website is hosted directly from an Amazon S3 bucket and distributed securely over the internet using CloudFront.

The website contains only static resources:

* HTML pages
* CSS styling
* JavaScript
* Images

No backend server or database is required.

---

## 🧱 System Architecture

User Browser
→ CloudFront CDN (HTTPS + Caching)
→ Amazon S3 Bucket (Static Files)
→ Website Content Displayed

CloudFront caches the content at edge locations and serves users from the nearest location, improving speed and security.

---

## 🛠️ Technologies Used

| Category         | Technology              |
| ---------------- | ----------------------- |
| Frontend         | HTML5, CSS3, JavaScript |
| Cloud Storage    | Amazon S3               |
| Content Delivery | AWS CloudFront          |
| Security         | HTTPS, Bucket Policy    |
| Version Control  | Git, GitHub             |

---

## 🚀 Deployment Procedure

### 1. Create S3 Bucket

* Created an S3 bucket in AWS console
* Selected region: **ap-south-1 (Mumbai)**
* Disabled *Block Public Access*

### 2. Upload Website Files

Uploaded the following files:

* index.html
* style.css
* script.js
* images folder

### 3. Enable Static Website Hosting

* Enabled "Use this bucket to host a website"
* Index document: `index.html`
* Error document: `error.html`

### 4. Configure Bucket Policy

Public read access was granted using the following policy:

```json
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
```

### 5. Create CloudFront Distribution

* Origin set to S3 static website endpoint
* Redirect HTTP to HTTPS enabled
* Default root object: `index.html`
* Automatic caching enabled

### 6. Access the Website

The website is accessed securely via the CloudFront HTTPS URL.

---

## 🌍 Live Website

**CloudFront URL:**
(Paste your CloudFront link here)

Example:
https://dt7o47zvx0o4o.cloudfront.net/

---

## 📂 Project Structure

```
aws-static-website/
│
├── index.html
├── style.css
├── script.js
├── images/
│
├── screenshots/
│   ├── s3-bucket.png
│   ├── static-hosting.png
│   ├── bucket-policy.png
│   ├── cloudfront-distribution.png
│   └── https-working.png
│
└── README.md
```

---

## 🔐 Security Configuration

* Public read-only access enabled
* HTTPS enabled using CloudFront
* No server-side execution
* Prevents direct modification of files

---

## ⚡ Advantages of This Approach

* Serverless hosting (no EC2 instance required)
* Low operational cost
* Highly scalable
* High availability
* Faster loading using CDN
* Secure HTTPS browsing

---

## 📸 Screenshots

The `screenshots` folder contains:

* S3 bucket file upload
* Static hosting configuration
* Bucket policy permissions
* CloudFront distribution setup
* Website running over HTTPS

---

## 🎓 Learning Outcomes

* Learned static website hosting using AWS
* Understood CDN and caching mechanism
* Implemented HTTPS using CloudFront
* Configured cloud storage permissions
* Used GitHub for version control

---

## 👤 Author

**Abhiram**
GitHub: https://github.com/abhiram4748

---

## 📄 Conclusion

This project successfully demonstrates deploying a static website using AWS cloud services. Amazon S3 stores the website files while CloudFront securely delivers them over HTTPS with improved performance and scalability.

---

## 📘 Note

This project was developed as an academic minor project for learning cloud computing deployment concepts.



This project demonstrates a complete cloud-based deployment pipeline where a static website is hosted on AWS S3 and securely delivered using CloudFront CDN, eliminating the need for traditional web hosting servers.
