# mern-social-nodeapi


.env

POrt = 8080
DATABASE = mongodb://localhost/mern-socio

JWT_SECRET = fgrfgeyfe589pouytfzfzfmlpkoiuytrafdghl<weue455893++-feofoepflfjefgef




# - to update dependenties
- ** . Reinstall All Dependencies and Regenerate package-lock.json
To ensure no residual vulnerability:

'''
rm -rf node_modules package-lock.json
npm install
'''
3. Audit and Fix Remaining Issues
Run the following command to automatically fix any additional known vulnerabilities:


npm audit fix

- For deeper fixes:

npm audit fix --force