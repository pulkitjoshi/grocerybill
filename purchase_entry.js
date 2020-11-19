var grocery_list="<?xml version='1.0'?><items><a101><item_name>Bread</item_name><price>20</price></a101><a102><item_name>Soap</item_name><price>15</price></a102><a103><item_name>Butter</item_name><price>40</price></a103><a104><item_name>Egg</item_name><price>6</price></a104><a105><item_name>Oil</item_name><price>300</price></a105><a106><item_name>Milk</item_name><price>23</price></a106><a107><item_name>Salt</item_name><price>15</price></a107></items>";
            


            function add(w)
            {   var check=0;
                var temp_id = document.getElementById("item_id").value;
                
                
                if(window.DOMParser)
                    {
                        myparser=new DOMParser();
                        myxmldocument = myparser.parseFromString(grocery_list,"text/xml");
                        temp_item_id = myxmldocument.getElementsByTagName(temp_id);
                        if(temp_item_id.length!=0)
                        {
                            var temp_item_name = temp_item_id[0].childNodes[0].firstChild.nodeValue;
                            var temp_item_price = temp_item_id[0].childNodes[1].firstChild.nodeValue;
                           
                            
                            var item_table = document.getElementById("purchased_item_table");
                            var i=item_table.rows.length;

                            for(var m=1;m<=i-3;m++)
                            {
                            
                                if(temp_item_name==document.getElementById("purchased_item_table").rows[m].cells.item(1).innerHTML)
                                {
                                    check=1;
                                    update();
                                }

                            }

                            
                        
                            if(check==0)
                            {
                                alert("Item Name:-  "+temp_item_name+"\n"+"Item Price:-  "+temp_item_price);
                                var item_quantity =0;
                                if(w=="1")
                                 item_quantity=parseInt(item_quantity)+1;
                                 else
                                 item_quantity = prompt("Enter Quantity");
                                if(item_quantity>0)
                                {
                                    var row = item_table.insertRow(i-3);
                                    var cell0 = row.insertCell(0);
                                    var cell1 = row.insertCell(1);
                                    var cell2 = row.insertCell(2);
                                    var cell3 = row.insertCell(3);
                                    var cell4 = row.insertCell(4);
                                    cell0.style.textAlign = "center";
                                    cell1.style.textAlign = "center";
                                    cell2.style.textAlign = "center";
                                    cell3.style.textAlign = "center";
                                    cell4.style.textAlign = "center";
                                    cell0.innerHTML = temp_id ;
                                    cell1.innerHTML = temp_item_name;
                                    cell2.innerHTML = item_quantity;
                                    cell3.innerHTML = temp_item_price;
                                    var amount= item_quantity*temp_item_price;
                                    cell4.innerHTML = amount;
                                }
                                else
                                    alert("Enter Quantity");
                            }
                            
                       }
                        else
                        alert("Enter Correct Item Id");
                       calculate(i)
                       
                    }
                    document.getElementById("data").reset();
                        
            }


            function delete1()
            {   var found=0;
                var temp_id=document.getElementById("item_id").value;
                document.getElementById("data").reset();
                var item_table = document.getElementById("purchased_item_table");
                var i=item_table.rows.length;
                if(window.DOMParser)
                    {
                        myparser=new DOMParser();
                        myxmldocument = myparser.parseFromString(grocery_list,"text/xml");
                        temp_item_id = myxmldocument.getElementsByTagName(temp_id);
                        if(temp_item_id.length!=0)
                        {
                            var temp_item_name = temp_item_id[0].childNodes[0].firstChild.nodeValue;

                            for(var m=1;m<=i-3;m++)
                            {
                            
                                if(temp_item_name==document.getElementById("purchased_item_table").rows[m].cells.item(1).innerHTML)
                                {
                                    found=1;
                                    document.getElementById("purchased_item_table").deleteRow(m);
                                    calculate(i-2);

                                }

                            }
                            if(found==0)
                            alert("Item Not Entered");
                        }
                        else
                        alert("Invalid Id");
                    }
            }

            function update()
            {
                var temp_id=document.getElementById("item_id").value;
                var item_table = document.getElementById("purchased_item_table");
                
                var i=item_table.rows.length;
                myparser=new DOMParser();
                myxmldocument = myparser.parseFromString(grocery_list,"text/xml");
                temp_item_id = myxmldocument.getElementsByTagName(temp_id);
                console.log(temp_item_id);
                var temp_item_name = temp_item_id[0].childNodes[0].firstChild.nodeValue;
                console.log(temp_item_name);
                for(var m=1;m<=i-3;m++)
                            {
                                
                            
                                if(temp_item_name==document.getElementById("purchased_item_table").rows[m].cells.item(1).innerHTML)
                                {
                                    //console.log(document.getElementById("purchased_item_table").rows[m].cells.item(1).innerHTML,temp_item_name);
                                    found=1;
                                    var item_quantity = prompt("Enter Quantity");
                                    //console.log(item_quantity);
                                    if(item_quantity>0)
                                    {
                                        var temp_quantity = document.getElementById("purchased_item_table").rows[m].cells;
                                        temp_quantity[2].innerHTML = item_quantity;
                                        var temp_item_price = document.getElementById("purchased_item_table").rows[m].cells.item(3).innerHTML;
                                        var amount= item_quantity*temp_item_price;
                                        temp_quantity[4].innerHTML = amount;
                                        //console.log(i-1);
                                        calculate(i-1);
                                    }
                                    
                                    else if(item_quantity!=null)
                                        delete1();
                                    
                                    else
                                    alert("Enter Quantity");

                                    

                                }
                               

                            }
                
            }

            function quick_update(sign)
            {
                var check=0;
                var temp_id=document.getElementById("item_id").value;
                var item_table = document.getElementById("purchased_item_table");
                var i=item_table.rows.length;
                for(var m=1;m<=i-3;m++)
                            {
                                //console.log(temp_id,"   ",document.getElementById("purchased_item_table").rows[m].cells.item(0).innerHTML);
                            
                                if(temp_id==document.getElementById("purchased_item_table").rows[m].cells.item(0).innerHTML)
                                {
                                   check=1;
                                    var old_quantity=parseInt(document.getElementById("purchased_item_table").rows[m].cells.item(2).innerHTML);
                                    var unit_price=parseInt(document.getElementById("purchased_item_table").rows[m].cells.item(3).innerHTML);
                                                                       
                                    if(sign=="+")
                                    {
                                        var temp_quantity = document.getElementById("purchased_item_table").rows[m].cells;
                                        temp_quantity[2].innerHTML = old_quantity+1;
                                        var temp_item_price = document.getElementById("purchased_item_table").rows[m].cells.item(3).innerHTML;
                                        var amount= (old_quantity+1)*unit_price;
                                        temp_quantity[4].innerHTML = amount;
                                        
                                        calculate(i-1);
                                    }

                                    if(sign=="-")
                                    {
                                        if(old_quantity-1>0)
                                        {
                                            var temp_quantity = document.getElementById("purchased_item_table").rows[m].cells;
                                            temp_quantity[2].innerHTML = old_quantity-1;
                                            var temp_item_price = document.getElementById("purchased_item_table").rows[m].cells.item(3).innerHTML;
                                            var amount= (old_quantity-1)*unit_price;
                                            temp_quantity[4].innerHTML = amount;
                                            calculate(i-1);
                                        }
                                        else
                                            delete1();
                                    }
                                    
                                }
                               

                            }
                            if(check==0)
                            {
                                if(sign=="+")
                                add("1");
                            }
                           
                
            }


            function calculate(i)
            {  console.log(i);
                var x=1,sub_total=0,total=0;
                        for(x=1;x<=i-3;x++)
                        {
                            
                            sub_total+=parseInt(document.getElementById("purchased_item_table").rows[x].cells.item(4).innerHTML);
                            

                        }
                        
                        var temp_subtotal = document.getElementById("purchased_item_table").rows[i-2].cells;
                        temp_subtotal[1].innerHTML = sub_total;
                        var total = document.getElementById("purchased_item_table").rows[i].cells;
                        total[1].innerHTML = Math.round(1.05*sub_total);
            }


            var newwin,tmr;
              
              function openwin()
              {   
                var item_table = document.getElementById("purchased_item_table");
                var i=item_table.rows.length;
                var temp_delivery = document.getElementById("delivery").value;
                console.log(temp_delivery);
                if(((document.getElementById("delivery").checked && document.getElementById("address").value!="")||(document.getElementById("delivery").checked==false) )&& i>4)
                {  
                    //console.log("my",i);
                    var item_table = document.getElementById("purchased_item_table");
                    var i=item_table.rows.length;
                    newwin=window.open('','','width=400,height=600,left=450,top=100');
                    newwin.document.open();
                    var dt = new Date();
                    var current_date=dt.toLocaleDateString();
                    var current_time=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
                    var bill_no=""+Math.round(Math.random() * 9)+dt.getDate()+dt.getHours()+dt.getMinutes()+dt.getSeconds();
                    var strcontent;
                    strcontent='<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Grocery Bill</title></head><body>';
                    strcontent+='<div align="center"><h1 style="font-family:magneto;">ACEME GROCERS</h1><p>E-City,Bangalore<br>Ph.No: +918273947563</p></div>';
                    strcontent+='<div style="height:60"><div style="float:left"><p>GST No.: 06AAQCS4519H1ZA<br>Date: '+current_date+'</p></div>';
                    strcontent+='<div style="float:right"><p>Bill No.:'+ bill_no+'<br>Time: '+current_time+'</p></div></div><hr><table style="width:100%;align="center"><tr>';
                    strcontent+='<th>S. No.</th>';
                    for(var z=1;z<5;z++)
                        strcontent+='<th>'+document.getElementById("purchased_item_table").rows[0].cells.item(z).innerHTML+'</th>';
                    strcontent+='</tr>';
                    for(var m=1;m<i-3;m++)
                        {   
                            strcontent+='<tr>';
                                strcontent+='<td style="text-align:center">'+m+'</td>'
                            for(var n=1;n<5;n++)
                            
                                strcontent+='<td style="text-align:center">'+document.getElementById("purchased_item_table").rows[m].cells.item(n).innerHTML+'</td>';
                            strcontent+='</tr>';
                        }
                        
                        strcontent+='<tr><td colspan=5></td></tr>';
                        strcontent+='<tr><td colspan=5></td></tr>';
                        
                    for(var x=i-3;x<i;x++)
                    {
                        strcontent+='<tr>';
                            strcontent+='<td colspan=4 style="text-align:right;font-weight:bold">'+document.getElementById("purchased_item_table").rows[x].cells.item(0).innerHTML+'</td>';
                            strcontent+='<td style="text-align:center;font-weight:bold">'+document.getElementById("purchased_item_table").rows[x].cells.item(1).innerHTML+'</td>';
                        strcontent+='</tr>';
                    }
                    var temp_price=parseInt(document.getElementById("purchased_item_table").rows[i-1].cells.item(1).innerHTML);
                    if(document.getElementById("delivery").checked)
                        {
                            var final_price=temp_price+50;
                            strcontent+='<tr>';
                            strcontent+='<td colspan=4 style="text-align:right;font-weight:bold">Delivery Charge</td>';
                            strcontent+='<td style="text-align:center;font-weight:bold">50</td>';
                            strcontent+='</tr>';
                            strcontent+='<tr>';
                            strcontent+='<td colspan=4 style="text-align:right;font-weight:bold">Final Amount</td>';
                            strcontent+='<td style="text-align:center;font-weight:bold">'+final_price+'</td>';
                        strcontent+='</tr>';
                        }
                        
                    strcontent+='</table>';
                    if(document.getElementById("delivery").checked && document.getElementById("address").value!="")
                        {
                            
                        
                            strcontent+='<hr><p style="font-size:15px"><b>Delivery Address: </b>'+document.getElementById("address").value+'</p>';
                        }

                    strcontent+='<hr><p style="font-size:10px">*Terms and Condition Apply</p></body></html>';
                    newwin.document.write(strcontent);
                    newwin.document.close();

                }

                else if(i<5)
                    alert("Bucket Empty!");

                else
                    alert("Enter Delivery Address!");
              }

            