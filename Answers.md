1.  Explain the differences between `client-side routing` and `server-side routing`.
    Ans: client-side routing refers to navigation that is completely handled in the browser, through js.
    There are no requests made to a server to load a different page view. Instead, when we want to request
    another page we just simply expose a different part of our code.
    Server-side routing on the other had is navigation that is handled by a server, reqs are made to the server
    from the client, who gets back a new view to display.

2.  What does HTTP stand for?
    Ans: HyperText Transfer Protocol (HTTP).

3.  What does CRUD stand for?
    Ans: Create, Read, Update, Delete (CRUD).

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    Ans:  
        C: Create ----> POST
        R: Read ----> GET
        U: Update ----> PUT/PATCH
        D: Delete ----> DELETE

5.  Mention three tools we can use to make AJAX requests
    Ans:
        1- fetch - Native js http library
        2- axios - Http library that is easier to use than fetch
        3- postman - An API development environment, with a nice UI for making AJAX requests.
        