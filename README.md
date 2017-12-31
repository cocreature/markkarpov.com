# Mark Karpov's personal web site

[![CircleCI](https://circleci.com/gh/mrkkrp/markkarpov.com/tree/master.svg?style=svg&circle-token=b1e49c26f2aa87ebc0c7884108ed7cfc866d24d0)](https://circleci.com/gh/mrkkrp/markkarpov.com/tree/master)

Here I have a `shake`-powered custom generator of static pages. I serve them
via Nginx from a DigitalOcean droplet.

## Ansible stuff

If you're going to use Circle CI for deploys (which you should), now is the
time to generate a custom SSH key. Circle CI will tell GitHub to add it to
your account and the `root.yml` playbook will fetch that and add it to the
server.

To setup a new droplet go to the `ansible` directory and run `root.yml`
playbook which will create the deploy user (called `admin` by default):

```
$ ansible-playbook root.yml
```

Then run the `setup.yml` playbook that sets up other stuff as the deploy
user:

```
$ ansbile-playbook setup.yml
```

To get a certificate from “Let's Encrypt” we still need to ssh into the
server and run this manually:

```
$ certbot --nginx -m my-email -d markkarpov.com certonly
```

(This should work.) The certificate renewal process is set up automatically
for you as part of `setup.yml` playbook.

Now you can deploy with `deploy.yml`:

```
$ ansible-playbook deploy.yml
```

But really Circle CI should be able to deploy for you from now on.

## License

Copyright © 2017–2018 Mark Karpov

All rights reserved.
