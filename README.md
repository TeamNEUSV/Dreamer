#                                     Weaver: a event-based social network
## Motivation

* Event organization: The need to organize school events interested/going and participated in one place, currently the events are distributed across different social media platforms or notified via email. 

* Social interaction: The need to connect with those who share your event experience. 

## Features
* User can browse all events, choose interested events (either save or show intension to attend) and post events
* User can check attendees of any event, check their profile information(workplace, title, social media account) and send message.

## Workflow diagram 
Please check https://github.com/TeamNEUSV/Weaver_LetsChat/blob/master/doc/Untitled%20Diagram.png

![](http://www.affiliateignition.com/wp-content/uploads/2017/02/Advantages-of-social-networking.jpg)
![](https://www.ibm.com/events/shared/img/think/home/think-new-lead.jpg)

## How to run
Make sure you have angularJS installed, git clone the repo, cd to Project folder and execute ng Serve will start the frontend.
The Project will be deployed onto Heroku as we progress on.

## Technology
We took an approach that is dynamic, data driven, and interactive. Focuses on the software development issues of integrating multiple languages, assorted data technologies, and Web interaction. Considers AngularJS, Node.js, MongoDB, HTTP, HTML, CSS, JavaScript, AJAX, SQL, and RESTful Web services.

## How do we scale after launch
*Caching: As the number of events grow up, event list (the main tab) loading speed will be optimized by caching, while personalized event list will take more time to fetch from database. 
*Load balancing: We will build a network of multiple servers of same code and access to same data, some frontend parts will be thrown behind load balancer to ensuare that work load is distributed evenly by load balancer. 
*Database sharding, denormalization and NoSQL: As user number grows, we need to partition data across machines. We will also add redundant information to speed up reads or use NoSQL which is designed to scale better.

## Members:

*Ted  li.haoli@husky.neu.edu there2win*
*Qi Zhang zhang.q@husky.neu.edu vickyzhang*
*Jin Niu niu.jin@husky.neu.edu jinniu*
*Xing Du du.xing1@husky.neu.edu xdu2017*


### Reference
[Blog](https://hackernoon.com/learn-blockchains-by-building-one-117428612f46) 
[Lynda](https://www.lynda.com/Blockchain-tutorials/Blockchain-Beyond-Basics)
[Ethereum](https://ethereum.org/token)
[ElasticBeanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/customize-containers-ec2.html#customize-containers-format-container_commands)
