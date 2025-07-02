# 🚀 Multi-Provider Email System Setup Guide

## 📋 Environment Variables Setup

### **Required for Provider Selection**
```env
# Choose your primary provider: 'resend', 'gmail', or 'auto'
EMAIL_PROVIDER=resend

# Admin email for notifications
EMAIL_ADMIN_RECIPIENT=admin@paradiselatindance.com
```

### **Resend Configuration** (Production Ready)
```env
RESEND_API_KEY=re_your_resend_api_key
RESEND_FROM_EMAIL=admin@paradiselatindance.com
RESEND_FROM_NAME="Paradise Latin Dance Studio"
```

### **Gmail Configuration** (Temporary/Development)
```env
GMAIL_USER=paradiselatindance@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

## ⚡ Quick Switching Guide

### **Switch to Gmail** (for next week)
```env
EMAIL_PROVIDER=gmail
GMAIL_USER=paradiselatindance@gmail.com
GMAIL_APP_PASSWORD=your_16_char_app_password
```

### **Switch to Resend** (when professional email ready)
```env
EMAIL_PROVIDER=resend
RESEND_API_KEY=re_your_api_key
RESEND_FROM_EMAIL=admin@paradiselatindance.com
``` 