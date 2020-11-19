var xmlstring= '<?xml version="1.0"?><employess><pulkit><password>pulkit</password></pulkit><laxman><password>laxman</password></laxman><tushar><password>tushar</password></tushar><akhil><password>akhil</password></akhil><ravi><password>ravi</password></ravi><gopal><password>gopal</password></gopal><ashish><password>ashish</password></ashish><kshitij><password>kshitij</password></kshitij></employess>';

            function login()
                { 
                    var temp_username = document.getElementById("username").value;
                    var tem_password= document.getElementById("password").value;
                    if(window.DOMParser)
                    {
                        myparser=new DOMParser();
                        myxmldocument=myparser.parseFromString(xmlstring,"text/xml");
                        console.log(myxmldocument);
                        username=myxmldocument.getElementsByTagName(temp_username);
                        
                        if(username.length!=0)
                        {
                            
                           var store_password=username[0].childNodes[0].firstChild.nodeValue;
                           
                           if(tem_password==store_password)
                           {
                              
                              location.replace("purchase_entry.htm");}
                             
                            else
                            {
                               alert("Invalid Password"); }
                            
                           
                        }
                        else
                        alert("Invalid Username");
                    }
                    


                 }