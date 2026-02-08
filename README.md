🌐 AWS Static Website Hosting (Amazon S3 + CloudFront)

📌 Overview

This project demonstrates how to deploy a static website using Amazon Web Services (AWS).
The website is hosted using **Amazon S3** and delivered securely using **AWS CloudFront CDN** over HTTPS.

The website contains only static files (HTML, CSS, JavaScript, Images) and does not require a backend server or database.

---

🧱 Architecture

User Browser → CloudFront (CDN + HTTPS) → Amazon S3 Bucket → Website Files

CloudFront caches the website globally and securely serves content to users while the S3 bucket stores the actual files.

---

🛠️ Technologies Used

| Category         | Technology              |
| ---------------- | ----------------------- |
| Frontend         | HTML5, CSS3, JavaScript |
| Cloud Storage    | Amazon S3               |
| Content Delivery | AWS CloudFront          |
| Security         | HTTPS, Bucket Policy    |
| Version Control  | Git & GitHub            |

---

🚀 Deployment Steps

1️⃣ Create S3 Bucket

* Created an S3 bucket in AWS Console
* Selected region (ap-south-1)
* Disabled **Block Public Access**

2️⃣ Upload Website Files

* Uploaded HTML, CSS, JS and images
* Verified file structure

3️⃣ Enable Static Website Hosting

* Enabled "Use this bucket to host a website"
* Set:

  * Index document → `index.html`
  * Error document → `error.html`

4️⃣ Configure Bucket Policy

Added public read access policy:

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

5️⃣ Create CloudFront Distribution

* Origin: S3 static website endpoint
* Viewer protocol: Redirect HTTP to HTTPS
* Enabled caching

6️⃣ Access Website

* Website accessed using CloudFront HTTPS URL

---

🌍 Live Website

**CloudFront URL:**
Paste your link here

Example:
[https://.cloudfront.net](dt7o47zvx0o4o.cloudfront.net)

---

📂 Project Structure

```
aws-static-website/
│
├── index.html
├── style.css
├── script.js
├── images/
│   ├── image1.jpg
│   ├── image2.jpg
│
├── screenshots/
│   ├── s3-bucket.png
│   ├── static-hosting.png
│   ├── bucket-policy.png
│   ├── cloudfront.png
│   └── https-site.png
│
└── README.md
```

---

🔐 Security Features

* Public read-only access configured
* HTTPS enabled via CloudFront
* Direct S3 access restricted to objects only
* No server-side vulnerability

---

⚡ Advantages

* Serverless hosting (no EC2 instance required)
* Low cost
* Highly scalable
* Global CDN caching
* Fast loading
* Secure HTTPS browsing

---

📸 Screenshots

Include screenshots showing:

* S3 bucket objects
* Static hosting configuration
* Bucket policy
* CloudFront distribution
* Website running with HTTPS

---

🎓 Learning Outcomes

* Understanding of static website hosting
* Working with AWS S3 storage
* CloudFront CDN implementation
* Access policies and permissions
* GitHub project management

---

👤 Author

Abhiram
GitHub: [https://github.com/abhiram4748](https://github.com/abhiram4748)

---

📄 Conclusion

This project demonstrates a complete cloud-based deployment pipeline where a static website is hosted on AWS S3 and securely delivered using CloudFront CDN, eliminating the need for traditional web hosting servers.
