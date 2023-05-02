---
title: "About"
---

<div id="terminal"></div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://unpkg.com/jquery.terminal/js/jquery.terminal.min.js"></script>
<link href="https://unpkg.com/jquery.terminal/css/jquery.terminal.min.css" rel="stylesheet" />

<script>
    $(document).ready(function() {
        $('#terminal').terminal(function(command, term) {
            if (command !== '') {
                try {
                    var result = window.eval(command);
                    if (result !== undefined) {
                        term.echo(String(result));
                    }
                } catch(e) {
                    term.error(String(e));
                }
            } else {
                term.echo('');
            }
        }, {
            greetings: 'Welcome to the terminal!',
            name: 'myterm',
            height: 200,
            prompt: '> '
        });
    });
</script>

{{< highlight yaml >}}
# Your terminal.yaml configuration goes here
params:
  TerminalConfig: "static/terminal.yaml"
  name: hugo-terminal
  height: 200
  description: "Benjamin Burton cv terminal format"
  prompt: " > BenjaminBurton@terminalcv ~ $ "
  promptColor: grey
  promptSimbols: ":~$"
  promptSimbolsColor: grey
  startxLocation: "https://localhost:1313/about"
  hideSocialName: true
  exitLocation: 'about:blank'
  hidesource: true
  greeting: | 
    Welcome to my online resume
    name: hugo-terminal


    Type 'help' for a list of available commands


  whois: 
      name: "Lavell Burton"
      profession: "Student of Knowledge"
      location: "California to New york"
      email: "benjaminlburton@gmail.com"
      homelink: "https://benjaminburton.github.io/"
      description: |
              Life Has Many Things to Be Thankful For 🤲🏾 excited about Cloud Architecture & Infrastructure. AWS & Microsoft Azure

  social:
    ## IF you want to keep them aligned just add spaces
    - name: "github"
      url: "          https://github.com/BenjaminBurton"
    - name: "linkedin"
      url: "        https://www.linkedin.com/in/benjaminlburton/"
    - name: "youtube"
      url: "       https://youtube.com/@motivationalwisdom891"

  workexp:
    - jobTitle: Amazon AWS Cloud Administration
      color: red
      company: 'Amazon' 
      location: Queens, NY
      date: March 2023 - Present
      description: AWS Cloud Architecture

    - jobTitle: Microsoft Azure Administration
      color: purple
      company: 'Microsoft'
      location: Queens, NY
      date: April 2023 - Present
      description: Azure Cloud Technologies

    - jobTitle: Terraform Associate
      company: 'Hashicorp'
      location: Queens, NY
      date: March - Present
      description: Terraform CLI & Cloud

  education:
   - courseName: Amazon AWS Cloud Practitioner
     color: red
     date: June 2019 - July 2019
     #description: Descrption about red color trianing

   - courseName: Microsoft Administration Associate
     date: Sept 2004 - Jun 2008
     #description: There is no need for description
     
   - courseName: Terraform Associate
     date: April 2023 - Present
     #description: There is no need for description

  skills:
    - name: Terraform
      percentage: 90
      #Description: you can add a description

    - name: Amazon AWS
      percentage: 30
      #description: or you can leave it comented   

    - name: Microsoft Azure
      color: blue
      percentage: 50
      #description: Skill names can have colors too

  softskills:
    - name: Self Starter
      color: red
      percentage: 80
      #description:

    - name: Communication
      #color: 
      percentage: 90
      #description: Description

  languages:
    - name: English
      color: Blue
      percentage: 50
      #description: 

    - name: Gibberish
      percentage: 100
      description: pasghettipigglywiggly


  projects:
    - title: Amazon Azure VPC & Subnetting 
      color: red
      date: since 2023
      link: https://github.com/BenjaminBurton/AWS-VPC-Setup
      description: Describing red stuff

    - title: Amazon S3 Buckets
      color: blue
      date: since 2016
      link: https://github.com/BenjaminBurton/Amazon-S3-Bucket
      #description: nothing to describe

    - title: Terraform Install with NGINX
      date: Since 2017
      link: https://github.com/BenjaminBurton/terraform-install
      #description: not there either

  certifications:
  - certName: Example Cert
    company: Example Certifying Company
    date: Date of Completion
    #description: Lorem Ipsum
  
  misc: 
    #commandName: newcommand
    title: "This Section can have a different command name"
    titleColor: teal
    content: |
          Here the title and the content can have different colors
          The content can be multi
          
          line

          And spaces       will be respected as well
          This section will have the default command: misc
          but you can name it something else with the property
          commandName: <String>
          Give it a shot and try and uncomment the line 
          commandName: newcommand
          now instead of misc you can execute the newcommand for this section
          Auto completion will know it too! :D 

    contentColor: orange
{{< /highlight >}}
