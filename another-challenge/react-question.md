## React Interview Question

### Description

Build a simple single page application using react with two different routes

- `/about-us` : renders 'CasaIQ - A Smart Home Solution Custom-built for Apartments, Condos, and Multifamily Real Estate.'.
- `/device/:device_name` : renders a simple UI for that device_name. `device_name` is a dynamic value in the URL. More
details on this page follows later.
- a simple navigation mechanism to switch between `about-us` and `/device/:device_name`

`device_name` will have values like `apt-143-lock` or `apt-143-thermostat`.
The `/device/:device_name` page should display the following information:

- Name of the device based on URL should be the title. Also, the title should be normalized: `apt-143-lock` should translate to `Apt 143 Lock`
- A simple user interface based on your choice to lock and unlock the door
- The interface should simulate changes on the lock state i.e. user should be able to lock and unlock the door on UI.
- some sort of state management should hold last 10 interactions with the lock
- Lock should start with initial json which looks something like below:

```javascript
{
  "type": "lock",
  "state": "locked",
  "last_updated_at": 1508386138,
  "slug": "apt-143-lock"
}
```

`state` can be one of `locked` or `unlocked` or any equivalent representations that reflects the idea of door lock and
unlock states.

- Last 10 interactions with the lock should hold the `state` and `timestamp` reflecting the state and time for the
particular event that occurred on the lock.

```json
[
  {
    "state": "locked",
    "timestamp": 1508383138
  },
  {
    "state": "unlocked",
    "timestamp": 1508385138
  }
]
```
- Its up to you to come with User Interface.
- Devices other than type `lock` should simply say `We are not supporting this device at the moment.`

### Notes

- don't try to over-engineer and use way too many stuff than necessary.
- writing tests, using a single styleguide, adding appropriate scripts for running linting, etc. are basic expectations.
- try to use redux or similar state management library
- you're expected to submit source code repository in github/bitbucket (or other cloud git services).
- try to build up your source code with feature based commits
- the earlier you send the faster we can evaluate and send the response back. That being said, take up to 48 hours before you make the first commit on the repository you are going to share with us.