*** DRY-do not repeat yourself ***
***** what services are provided by you in the application 
Description of project(features of ur application)
modules
flow
sample screenshot
then implementation *****

1. for installing package.json {npm init -y}
2. create .env {npm i dotenv}
3. create express epp and assign port number(npm i express)
4. connect to db install mongoose{npm i mongoose} 
    also for hashing password install bcryptjs {npm i bcryptjs}
5. define schemas nd create models
    -UserTypeSchema
        firstName
        lastName  (plan to use social login) i.e we r taking 2 name's
        email
        password
        role
        profileImageUrl
        isUserActive 

    -ArticleSchema(depending on Author Doc(details), User Doc(comments))--references creation---(referrs to all updation in original Doc)
        author
        title
        category
        content
        comments
        isArticleActive

6. Implement API's
    UserApi->userApp
    AuthorApi->authorApp
    AdminApi->adminApp

7. common api for   Registration  (author,user)
                    Login         (author,user,admin)
                    LogOut        (author,user,admin)
8. npm i jsonwebtoken
authentication(logged in ) & autheristion(roles)
9. 
10. 