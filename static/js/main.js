jQuery(document).ready(function ($) {
  var animation = false;
  var availableCommands = [
    "all",
    "whois",
    "social",
    "work",
    "education",
    "skills",
    "softskills",
    "languages",
    "projects",
    "certifications",
    "startx",
    "exit",
    "more",
    "source",
  ];

  $("body").terminal(
    function (command, term) {
      function whois() {
        term.echo("");

        term.echo("[[b;grey;]Name:]\t\t\tLavell \u00224s3ti\u0022 Burton");
        term.echo("[[b;grey;]Profession:]\t\tStudent");
        term.echo("[[b;grey;]Location:]\t\tQueens");

        term.echo("[[b;grey;]Homepage:]\t\thttps://BenjaminBurton.github.io");

        term.echo("");
        term.echo(
          "IT? Linux? yes that\u0027s me right there ... \nTinkering with computers I can remember!\nOooh btw ... I use Terraform, AWS and Azure! \n"
        );

        term.echo("");
      }

      function social() {
        term.echo("");

        term.echo("Github:" + "    https://github.com/");

        term.echo("Youtube:" + "   https://youtube.com/");

        term.echo("Twitter:" + "   https://twitter.com//");

        term.echo("Instagram:" + " https://www.instagram.com//");

        term.echo("Twitch:" + "    https://twitch.tv/");

        term.echo("discord:" + "   https://discord.gg/");

        term.echo("Coffee:" + "     https://www.buymeacoffee.com/");

        term.echo("");
      }

      function certifications() {
        term.echo("");

        term.echo("[[b;grey;]AWS Solutions Architect - in Training]");
        term.echo("2022");

        term.echo("-------------------- ");
        term.echo("");

        term.echo("[[b;grey;]HashiCorp Terraform Associate in Training]");
        term.echo("2023");

        term.echo("-------------------- ");
        term.echo("");
      }

      function work() {
        term.echo("");

        term.echo("[[b;grey;]Senior Operations Engineer]");
        term.echo("Vidispine AB");
        term.echo("Queens");
        term.echo("March 2023 - Present");
        term.echo("");
        term.echo(
          "Automate \u0026 Document all things! \nCloud infrastructure maintenance, Infrastructure as Code development, \nFoster DevOps enviroment and advocate of GitOps Practices!\n"
        );
        term.echo("-------------------- ");
        term.echo("");

        term.echo("[[b;grey;]Lead Data Center Technician]");
        term.echo("Amazon Web Services (AWS)");
        term.echo("Sweden");
        term.echo("July 2017 - July 2019");
        term.echo("");
        term.echo(
          "1st Data Center Technician being hired for AWS Stockholm region, \nBuild 3 Datacenters from the ground up,\nAutomated some initial bootstrap and configuration tasks,\nIncident first responder, Wi-Fi network subject matter expert,\nNew techs trainer and the go-to guy for all tech stuff! \n"
        );
        term.echo("-------------------- ");
        term.echo("");

        term.echo("[[b;grey;]Freelancer / Contractor]");
        term.echo("-");
        term.echo("Portugal");
        term.echo("July 2008 - 2017");
        term.echo("");
        term.echo(
          "Custom computer builds, Computer repairs, \nWordpress websites, SOHO networking and servers.  \n"
        );
        term.echo("-------------------- ");
        term.echo("");

        term.echo("[[b;grey;]IT Systems Technician]");
        term.echo("Portugues Air Force");
        term.echo("Portugal");
        term.echo("June 2010 - June 2016");
        term.echo("");
        term.echo(
          "The guy that gets your computer working just by looking at it!\nService/Help desk, Workstation \u0026 printer repairs, \nWorkstations initial provisioning and imaging,\nWired and Wi-Fi Network maintenance.\n"
        );
        term.echo("-------------------- ");
        term.echo("");

        term.echo("[[b;grey;]Level 2 Call Centre Support Technician]");
        term.echo("Portugal Telecom");
        term.echo("Portugal");
        term.echo("July 2008 - July 2009");
        term.echo("");
        term.echo(
          "The guy that you yell at when your internet is not interneting!"
        );
        term.echo("-------------------- ");
        term.echo("");
      }

      function education() {
        term.echo("");

        term.echo("[[b;grey;]Amazon AWS Cloud Practitioner]");
        term.echo("June 2009 - July 2010");

        term.echo("-------------------- ");
        term.echo("");

        term.echo("[[b;grey;]Microsoft Azure Cloud]");
        term.echo("Sept 2004 - Jun 2008");

        term.echo("-------------------- ");
        term.echo("");
      }

      function skills() {
        term.echo(" ");

        var bar_length = Math.round(90 / 10);
        var bar_filled = Array(bar_length + 1).join("&#9611;");
        var bar_blank = Array(11 - bar_length).join("&#9617;");
        term.echo(
          "[[b;grey;]Troubleshooting:]\n" + bar_filled + bar_blank + 90 + "%"
        );

        term.echo("");

        var bar_length = Math.round(90 / 10);
        var bar_filled = Array(bar_length + 1).join("&#9611;");
        var bar_blank = Array(11 - bar_length).join("&#9617;");
        term.echo("[[b;grey;]Linux:]\n" + bar_filled + bar_blank + 90 + "%");

        term.echo("");

        var bar_length = Math.round(70 / 10);
        var bar_filled = Array(bar_length + 1).join("&#9611;");
        var bar_blank = Array(11 - bar_length).join("&#9617;");
        term.echo("[[b;grey;]Windows:]\n" + bar_filled + bar_blank + 70 + "%");

        term.echo("");

        var bar_length = Math.round(90 / 10);
        var bar_filled = Array(bar_length + 1).join("&#9611;");
        var bar_blank = Array(11 - bar_length).join("&#9617;");
        term.echo("[[b;grey;]Hardware:]\n" + bar_filled + bar_blank + 90 + "%");

        term.echo("");

        var bar_length = Math.round(85 / 10);
        var bar_filled = Array(bar_length + 1).join("&#9611;");
        var bar_blank = Array(11 - bar_length).join("&#9617;");
        term.echo(
          "[[b;grey;]Networking:]\n" + bar_filled + bar_blank + 85 + "%"
        );

        term.echo("");

        var bar_length = Math.round(70 / 10);
        var bar_filled = Array(bar_length + 1).join("&#9611;");
        var bar_blank = Array(11 - bar_length).join("&#9617;");
        term.echo(
          "[[b;grey;]Development \u0026 Scripting:]\n" +
            bar_filled +
            bar_blank +
            70 +
            "%"
        );

        term.echo("Terraform, Bash, expect, git, python");

        term.echo("");

        var bar_length = Math.round(40 / 10);
        var bar_filled = Array(bar_length + 1).join("&#9611;");
        var bar_blank = Array(11 - bar_length).join("&#9617;");
        term.echo(
          "[[b;grey;]webdevelopment / webdesign:]\n" +
            bar_filled +
            bar_blank +
            40 +
            "%"
        );

        term.echo("HTML, CSS, Joomla, Wordpress");

        term.echo("");
      }
      function softskills() {
        term.echo("");

        var bar_length = Math.round(80 / 10);
        var bar_filled = Array(bar_length + 1).join("&#9611;");
        var bar_blank = Array(11 - bar_length).join("&#9617;");
        term.echo(
          "[[b;grey;]Self-Motivated:]\n" + bar_filled + bar_blank + 80 + "%"
        );

        term.echo("");

        var bar_length = Math.round(90 / 10);
        var bar_filled = Array(bar_length + 1).join("&#9611;");
        var bar_blank = Array(11 - bar_length).join("&#9617;");
        term.echo(
          "[[b;grey;]Team-Work:]\n" + bar_filled + bar_blank + 90 + "%"
        );

        term.echo("");

        var bar_length = Math.round(90 / 10);
        var bar_filled = Array(bar_length + 1).join("&#9611;");
        var bar_blank = Array(11 - bar_length).join("&#9617;");
        term.echo(
          "[[b;grey;]Communication:]\n" + bar_filled + bar_blank + 90 + "%"
        );

        term.echo("");

        var bar_length = Math.round(70 / 10);
        var bar_filled = Array(bar_length + 1).join("&#9611;");
        var bar_blank = Array(11 - bar_length).join("&#9617;");
        term.echo(
          "[[b;grey;]Resilience:]\n" + bar_filled + bar_blank + 70 + "%"
        );

        term.echo("");

        var bar_length = Math.round(60 / 10);
        var bar_filled = Array(bar_length + 1).join("&#9611;");
        var bar_blank = Array(11 - bar_length).join("&#9617;");
        term.echo(
          "[[b;grey;]Leadership:]\n" + bar_filled + bar_blank + 60 + "%"
        );

        term.echo("");
      }

      function languages() {
        term.echo("");

        var bar_length = Math.round(100 / 10);
        var bar_filled = Array(bar_length + 1).join("&#9611;");
        var bar_blank = Array(11 - bar_length).join("&#9617;");
        term.echo(
          "[[b;grey;]English:]\n" +
            "" +
            bar_filled +
            bar_blank +
            " " +
            100 +
            "%"
        );

        term.echo("");
      }

      function projects() {
        term.echo("");

        term.echo("[[b;grey;]#Backtoboard]");
        term.echo("since 2020");
        term.echo("https://youtube.com/");

        term.echo(
          "Yes I am a geek and I am not getting any younger but I can also Skate and snowboard!"
        );

        term.echo("-----------------------");
        term.echo("");

        term.echo("[[b;grey;]BenjaminBurton.github.io]");
        term.echo("since 2007");
        term.echo("https://BenjaminBurton.github.io");

        term.echo(
          "My little piece of web! the place where I host, learn and express myself about geek things!"
        );

        term.echo("-----------------------");
        term.echo("");

        term.echo("[[b;grey;]TerminalCV]");
        term.echo("since June 2016");
        term.echo("https://github.com//terminalcv");

        term.echo(
          "HUGO theme, single page cv style template using jcubic/jquery.terminal"
        );

        term.echo("-----------------------");
        term.echo("");

        term.echo("[[b;grey;]Hello-4s3ti]");
        term.echo("since 2022");
        term.echo("https://github.com/4s3ti/hugo-theme-hello-4s3ti");

        term.echo("HUGO theme for blog style websites");

        term.echo("-----------------------");
        term.echo("");

        term.echo("[[b;grey;]PiVPN]");
        term.echo("Since 2017");
        term.echo("https://pivpn.io");

        term.echo(
          "Lead maintainer, PiVPN designed to setup a VPN on your raspberry pi or cloud instance!"
        );

        term.echo("-----------------------");
        term.echo("");
      }

      function misc() {
        term.echo("");
        term.echo("[[b;;]More info about my likes and dislikes]" + "\n");
        term.echo(
          "[[;;]Current favourites and daily drivers\n----------------------------------------------------------\nArch Linux      Unraid      Debian\nVIM             VSCode      GitLab      GitHub\nGitlabCI        GHActions   TravisCI\nJSon            yaml        MarkDown    HUGO\nTerraform       Bash        GIT\nAWS             Hetzner     Scaleway    GCP\nNginx           Traefik      Docker      Kubernetes\nWireguard       OpenVPN     RaspberryPi Unifi\nNotion          Figma       Jira        Confluence\nProtonmail      Element.io  Slack       Discord\nDavinci Resolve QEMU/KVM\n\n------------------------------------------------------------ \nCurrently using but I don\u0027t like them that much\n------------------------------------------------------------\nAzureDevops    MSTeams      Office365     Windows\n\n------------------------------------------------------------\nI\u0027d like to know more about\n------------------------------------------------------------\nGo             Python       MySQL       Front-end \n\n------------------------------------------------------------\nI\u0027ve used in the past\n------------------------------------------------------------\nCentOS        Fedora        ProxMox\nCISCO         Juniper\natom          Windows       Obsidian  vimwiki\nPostfix        Dovecot       Apache    CPanel\nBitBucket     \nOVH           VirtualBox    VMWare    OpenStack\nNovell\n]"
        );
        term.echo("");
      }

      function help() {
        term.echo(
          "\n[[b;white;]Available commands:]\n" +
            "\n" +
            availableCommands.join(" ") +
            "\n"
        );
      }

      function source() {
        term.echo(
          "        _______            \n" +
            "       |       |           \n" +
            "       |       |           \n" +
            "       |_______|_______    \n" +
            "               |       |   \n" +
            "               |       |   \n" +
            " ______________|_______|   \n" +
            "|      |       |       |   \n" +
            "|      |       |       |   \n" +
            "|______|_______|_______|   \n" +
            "[[;red;]May the source be with you]\n" +
            "[[;grey;]https://github.com/4s3ti/terminalcv\n"
        );
      }

      function progress(percent, width) {
        var size = Math.round((width * percent) / 100);
        var left = "",
          taken = "",
          i;
        for (i = size; i--; ) {
          taken += "=";
        }
        if (taken.length > 0) {
          taken = taken.replace(/=$/, ">");
        }
        for (i = width - size; i--; ) {
          left += " ";
        }
        return "[" + taken + left + "] " + percent + "%";
      }

      function loading() {
        var i = 0,
          size = 30;
        prompt = term.get_prompt();
        string = progress(0, size);
        term.set_prompt(progress);
        animation = true;
        (function loop() {
          string = progress(i++, size);
          term.set_prompt(string);
          if (i < 100) {
            timer = setTimeout(loop, 10);
          } else {
            term.echo(progress(i, size) + " [[b;green;]OK]").set_prompt(prompt);
            animation = false;
          }
        })();
      }

      commands = command.split(/[ ]+/);
      switch (commands[0]) {
        case "whois":
          whois();
          break;
        case "social":
          social();
          break;
        case "work":
          work();
          break;
        case "education":
          education();
          break;
        case "skills":
          skills();
          break;
        case "softskills":
          softskills();
          break;
        case "languages":
          languages();
          break;
        case "projects":
          projects();
          break;
        case "certifications":
          certifications();
          break;
        case "more":
          misc();
          break;
        case "help":
          help();
          break;
        case "all":
          whois();
          social();
          work();
          education();
          skills();
          softskills();
          languages();
          projects();
          certifications();

          misc();

          source();

          break;

        case "startx":
          term.echo("loading ...");
          loading();
          setTimeout(function () {
            window.location = "https://4s3ti.net";
          }, 2000);
          break;

        case ":(){:|:&};:":
        case "source":
          source();
          break;

        case "exit":
          term.echo("terminating ... ");
          loading();
          setTimeout(function () {
            window.location = "about:blank";
          }, 2000);
          break;

        default:
          term.echo(
            "\nunknown command: " +
              command +
              "\n" +
              "please type 'help' for a list of available commands\n"
          );
      }
    },
    {
      prompt: "[[;grey;]4s3ti@irl][[;grey;]:~$]" + " ",
      greetings:
        "[[b;white;]Welcome to my online resume\n\n\nType \u0027help\u0027 for a list of available commands\n]",
      keydown: function (e, term) {
        if (animation) {
          if (e.which == 68 && e.ctrlKey) {
            clearTimeout(timer);
            animation = false;
            term.echo(string + " [[b;red;]FAIL]").set_prompt(prompt);
          }
          return false;
        }
      },
      autocompleteMenu: true,
      completion: availableCommands,
    }
  );
});
github("jcubic/jquery.terminal");
