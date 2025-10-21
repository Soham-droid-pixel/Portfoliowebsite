# Contact Form Setup

## Environment Variables Setup

The contact form uses Web3Forms API which requires an access key.

### Steps to Configure:

1. **Get Your Free Access Key:**
   - Visit: https://web3forms.com
   - Enter your email: `sohamkalg@gmail.com`
   - You'll receive an access key instantly in your email

2. **Add the Access Key:**
   - Open `.env.local` file in the root directory
   - Replace `YOUR_ACCESS_KEY_HERE` with your actual access key:
     ```
     NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-actual-key-here
     ```

3. **Restart the Dev Server:**
   ```bash
   # Stop the current server (Ctrl + C)
   # Then restart:
   npm run dev
   ```

4. **Test the Form:**
   - Go to http://localhost:3000
   - Scroll to the Contact section
   - Fill out and submit the form
   - You should receive the email at sohamkalg@gmail.com

### Features:
- ✅ Sends emails directly to your inbox
- ✅ Free tier: 250 submissions/month
- ✅ Toast notifications for user feedback
- ✅ Form auto-resets after submission
- ✅ Built-in spam protection

### Security:
- The `.env.local` file is already in `.gitignore`
- Your access key will NOT be committed to git
- Never share your `.env.local` file publicly
