# How the Web Works

Define the following terms in your own words. 

**What is HTTP?**

HTTP is the underlying protocol used for web browsers to communicate with web servers.

**What is a URL?**

URL stands for Unique Resource Locator. It is made up of a protocol, hostname (domain), and a path. It tells your browser which website to visit and what resources you're trying on access to that specific site. 

**What is DNS?**

DNS standards for Domain Name System. A simple analogy is that DNS is the equivalent of a phone book where Domains and IPs Addresses are matched similar to how names are matched to phone numbers. 

**What is a query string?**

A query string comprises of key-value pairs that enable a user or browser to provide more information to a URL. Certain characters are restricted which requires you to used encoded representations of those characters.

**What are two HTTP verbs and how are they different?**

- **GET:** Retrieve *something* from a web server. 

- **POST:** Send *something* to a web server.

**What is an HTTP Request?**

An HTTP request is a request from a client (web browser) to a server. This request will follow the HTTP protocol that is referenced in the first question.

**What is an HTTP Response?**

An HTTP Response is a response from a web server to a client (web browser). Similar to the request, the response will follow a specific protocol that will provide the requested information.

**What is an HTTP header? Give a couple of examples of request and response headers you've seen.**

HTTP headers provide additional information that is used by a client (web browser) or servr. Below are a few examples of headers:

- **User-Agent** A string that identifies the type of application and OS that is being used when sending a request to a web server. 
- **Date** The date and time when a request was sent.
- **Accept** Communicates to a web server the type of content that a web browser is able to understand. For example: text/html or application/xhtml+xml

**What are the processes that happen when you type `http://somesite.com/some/page.html` into a browser?**

While significantly simplified, you could breakdown this process into four generalized steps:

- **Locate Web Server**
  - The URL inserted into the browser will attempt to locate the specific IP Address of the web server through the DNS.
- **Send a Request** 
  - With the specific server location (IP) it with then submit a request (GET) to retrieve a response. 
- **Recieve a Response**
  - The server will receive the request then send a response back to the browser communicating if the request was valid (Status Code) along with additional data.
- **Render Data in the Browser**
  - The browser will then interpret and render the data collected from the web server. 
