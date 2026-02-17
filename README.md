

#### 7) Create a README file to answer the following questions-

> **⚠️ Warning:** Do not use any AI tools to answer these questions. You must write the answers in **Bangla**.

#### 1) What is the difference between `null` and `undefined`?

undefined হলো -
variable declare  করা হয়েছে but value দেওয়া হয় নি। বা function কিছু return করেনি। 



#### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?


map () ব্যবহার করা হয় একটা array থেকে নতুন এরে তৈরী করার জন্য এবং প্রতিটি element change করা হয়।
একটা new array পাই। 

foreEach () ব্যবহার করা হয় array loop করার জন্য, কিছু reaturn kore না। 



#### 3) What is the difference between `==` and `===`?

"==" এটা value check করে data type check করে না। 

"===" এটা value o type দুইটাই compare করে। 


#### 4) What is the significance of `async`/`await` in fetching API data?

fetch ব্যবহার করলে data সাথে সাথে আসে না তখন async use করি যার ফলে function সব সময় promise return করে এবং await promise resolve হওয়া পর্যন্ত wait করে, promise থেকে actual value বের করে দেয়। 



#### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).


global scope এ declare করা variable যেকোনো জায়গা থেকে access করা যায়।
but এটা বেশি use করা হয় না। 

function scope  শুধু function এর ভেতরে declare করা variable শুধু সেই function এর ভিতরেই accessible.

Block scope { } এর ভিতরে declare করা variable শুধু সেই block এর ভিতরেই accessible।
 এবং let ও  const  Block scope আর var হলো global scope
