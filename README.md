<h1 align="center">School Management System</h1>
This is mainly a backend program designed with NodeJs. The two main functionalities injected into this 
project are:
<ul>
  <li>Getting students details by ID</li>
  <li>Registring new students by supping students details</li>
</ul> <br>


<h2>Getting students details by ID</h2>
This is handled by the <kbd>express app</kbd> which is being required in the index.js since it is a package/dependency.
This was done via the <kbd>GET</kbd> request handler. The <kbd>app.get</kbd> route and the <kbd>router.get</kbd> routes were also used in this project. 
A callback function is passed right after these parameters to be able to interact with the request and response parameters 
to render our EJS files on the browser. IDs were automatically generated by the database application<kbd>(MONGODB).</kbd>During the retrieval of 
any of the documents from the database, the id is being passed a parameter to the browser, and hence search through the 
database to display the extra details of the particular ID(document). <br>

<h2>Registring new students by supping students details</h2>
A web form was created in a <kbd>register.ejs</kbd> file as part of the project. Throught this form, we take detailed(value) of a student 
pass it as data and save it to the database and return a template which adds the data passed into the form earlier in addition to the 
existing data if there is any. This is done by the <kbd>POST</kbd> request handler. This is also similarly handled by the app created from the express framer.
An object model was created using the <kbd>mongoose</kbd> and in conjuction with the mongodb. During the post request, a path is passed 
as a parameter which directs users to the root of the site(/students). The second argument passed to this fuction 
is a callback function which takes in the request and response arguments. Within this callback function, an instance of the 
object is created thus <kbd><b>const student = new Student(req.body)</b></kbd> and then grabs the values with was passed from the forms 
and saves it to the database(The <kbd>student.save()</kbd> is used for this action).



<h2>Dependencies and Packages</h2>
<ul>
  <li><kbd>EJS</li>
  <li><kbd>Express</li>
  <li><kbd>Mongoose</li>
  <li><kbd>morgan</li>
  <li><kbd>NodeMon</li>
</ul>
