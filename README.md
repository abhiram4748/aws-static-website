<div align="center">

# ☁️ Static Website Hosting on AWS

### Amazon S3 + CloudFront CDN — Serverless, Secure, and Globally Distributed

[![AWS](https://img.shields.io/badge/AWS-S3%20%2B%20CloudFront-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/)
[![HTTPS](https://img.shields.io/badge/HTTPS-Enabled-4CAF50?style=for-the-badge&logo=letsencrypt&logoColor=white)](https://aws.amazon.com/cloudfront/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

<br/>

> A cloud computing project demonstrating how to replace traditional web servers with **serverless AWS infrastructure** — storing static assets on S3 and delivering them securely worldwide through CloudFront CDN.

<br/>

🌐 **Live Demo:** [`https://dt7o47zvx0o4o.cloudfront.net`](https://dt7o47zvx0o4o.cloudfront.net)

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Deployment Guide](#-deployment-guide)
- [Security Configuration](#-security-configuration)
- [Why This Approach?](#-why-this-approach)
- [Screenshots](#-screenshots)
- [Learning Outcomes](#-learning-outcomes)
- [Author](#-author)

---

## 🔍 Overview

This project replaces the need for a traditional web server (e.g., Apache, Nginx, or an EC2 instance) by leveraging **AWS-managed cloud services** to host and deliver a static website:

| Component | Role |
|---|---|
| **Amazon S3** | Stores and serves all static website files (HTML, CSS, JS, images) |
| **AWS CloudFront** | Acts as a global CDN — caches content at edge locations for low-latency delivery |
| **HTTPS / TLS** | Enforced by CloudFront for all end-user connections |
| **Bucket Policy** | Controls public read access at the object level |

The website is composed entirely of static resources (no server-side logic or database), making this setup ideal for portfolios, landing pages, documentation sites, and marketing pages.

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         User's Browser                              │
└────────────────────────────┬────────────────────────────────────────┘
                             │  HTTPS Request
                             ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    AWS CloudFront (CDN)                              │
│                                                                     │
│  • Global edge locations (low latency)                              │
│  • HTTPS termination & TLS encryption                               │
│  • HTTP → HTTPS redirect                                            │
│  • Automatic caching of static assets                               │
└────────────────────────────┬────────────────────────────────────────┘
                             │  Cache Miss → Fetch from Origin
                             ▼
┌─────────────────────────────────────────────────────────────────────┐
│              Amazon S3 Bucket (ap-south-1 / Mumbai)                 │
│                                                                     │
│  index.html  │  style.css  │  script.js  │  /images                │
│                                                                     │
│  • Static website hosting enabled                                   │
│  • Public read-only bucket policy                                   │
└─────────────────────────────────────────────────────────────────────┘
```

**Request Flow:**
1. User visits the CloudFront HTTPS URL
2. CloudFront checks its edge cache — if the content is cached, it's returned immediately
3. On a cache miss, CloudFront fetches the file from the S3 origin
4. Response is cached at the edge for future requests and delivered to the user

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|---|---|---|
| **Frontend** | HTML5, CSS3, JavaScript | Static website content |
| **Cloud Storage** | Amazon S3 | File storage and static hosting |
| **CDN** | AWS CloudFront | Global delivery, caching, HTTPS |
| **Security** | TLS/HTTPS, IAM Bucket Policy | Encrypted transport, access control |
| **Version Control** | Git + GitHub | Source code management |
| **Region** | `ap-south-1` (Mumbai) | S3 bucket origin |

---

## 📂 Project Structure

```
aws-static-website/
│
├── 📄 index.html              # Main webpage
├── 🎨 style.css               # Styling
├── ⚙️  script.js               # Client-side logic
├── 🖼️  images/                 # Static image assets
│
├── 📸 screenshots/
│   ├── s3-bucket.png          # S3 bucket creation
│   ├── static-hosting.png     # Static hosting config
│   ├── bucket-policy.png      # Bucket policy setup
│   ├── cloudfront-distribution.png  # CloudFront setup
│   └── https-working.png      # Live HTTPS site
│
└── 📘 README.md               # Project documentation
```

---

## 🚀 Deployment Guide

Follow these steps exactly to replicate this deployment.

### Step 1 — Create an S3 Bucket

1. Log in to [AWS Console](https://console.aws.amazon.com/) → navigate to **S3**
2. Click **Create bucket**
3. Set a globally unique bucket name (e.g., `my-static-site-2024`)
4. Select region: **ap-south-1 (Mumbai)**
5. Under **Block Public Access**, **uncheck** "Block all public access" → acknowledge the warning
6. Click **Create bucket**

---

### Step 2 — Upload Website Files

Upload the following to your bucket:
- `index.html`
- `style.css`
- `script.js`
- `images/` folder (all image assets)

> **Tip:** Ensure `index.html` is at the root of the bucket, not inside a subfolder.

---

### Step 3 — Enable Static Website Hosting

1. Open your bucket → go to the **Properties** tab
2. Scroll to **Static website hosting** → click **Edit**
3. Select **Enable**
4. Set **Index document**: `index.html`
5. Set **Error document**: `error.html`
6. Save changes

Note the **Bucket website endpoint** URL shown — you'll use this as the CloudFront origin.

---

### Step 4 — Attach a Bucket Policy

Go to **Permissions** tab → **Bucket Policy** → paste the following:

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

> ⚠️ Replace `YOUR_BUCKET_NAME` with your actual bucket name before saving.

This grants **public read-only** access — users can fetch files but cannot upload, modify, or delete them.

---

### Step 5 — Create a CloudFront Distribution

1. Navigate to **CloudFront** → click **Create Distribution**
2. Under **Origin**:
   - Set **Origin domain** to your S3 **static website endpoint** (not the bucket ARN)
   - Example: `my-static-site.s3-website.ap-south-1.amazonaws.com`
3. Under **Viewer Protocol Policy**: select **Redirect HTTP to HTTPS**
4. Set **Default root object**: `index.html`
5. Leave caching settings as default (or configure TTL as needed)
6. Click **Create Distribution**

> ⏱️ Deployment takes ~5–10 minutes. Status will change from `Deploying` to `Enabled`.

---

### Step 6 — Access Your Website

Once deployed, your site is live at:

```
https://<your-distribution-id>.cloudfront.net
```

Example: `https://dt7o47zvx0o4o.cloudfront.net`

---

## 🔐 Security Configuration

| Security Layer | Implementation |
|---|---|
| **Transport Encryption** | HTTPS enforced via CloudFront TLS |
| **HTTP Redirect** | All HTTP requests auto-redirect to HTTPS |
| **Access Control** | S3 bucket policy — public `s3:GetObject` only |
| **No Server Execution** | Pure static files; no server-side code runs |
| **Write Protection** | No `s3:PutObject` or `s3:DeleteObject` in policy |
| **DDoS Protection** | CloudFront includes AWS Shield Standard by default |

---

## ⚡ Why This Approach?

| Feature | Traditional Hosting (EC2/VPS) | This Approach (S3 + CloudFront) |
|---|---|---|
| **Server management** | Manual patching & maintenance | None (fully managed) |
| **Scaling** | Manual / auto-scaling groups | Automatic, infinite |
| **Cost** | Fixed monthly (even when idle) | Pay-per-request (near zero for low traffic) |
| **HTTPS setup** | Manual cert management | Automatic via CloudFront |
| **Global delivery** | Single region | 400+ CloudFront edge locations |
| **Availability** | Dependent on instance uptime | 99.99% S3 SLA |
| **Operational overhead** | High | Zero |

---

## 📸 Screenshots

> Screenshots are available in the `/screenshots` directory.

| Screenshot | Description |
|---|---|
| `s3-bucket.png` | S3 bucket creation and file upload |
| `static-hosting.png` | Static website hosting configuration |
| `bucket-policy.png` | Public read-only bucket policy |
| `cloudfront-distribution.png` | CloudFront distribution settings |
| `https-working.png` | Live website served over HTTPS |

---

## 🎓 Learning Outcomes

By completing this project, the following cloud concepts were put into practice:

- **Amazon S3** — bucket creation, object storage, static website hosting, and IAM bucket policies
- **AWS CloudFront** — CDN concepts, edge caching, origin configuration, and HTTPS enforcement
- **Cloud Security** — least-privilege access policies, HTTPS/TLS, and public vs. private access control
- **Serverless Architecture** — eliminating the need for managed servers entirely
- **Infrastructure as Configuration** — deploying infrastructure through the AWS Console declaratively

---

## 👤 Author

**Abhiram**

[![GitHub](https://img.shields.io/badge/GitHub-abhiram4748-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/abhiram4748)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**⭐ If you found this project useful, consider giving it a star!**

*Developed as an academic minor project for learning cloud computing deployment on AWS.*

</div>
