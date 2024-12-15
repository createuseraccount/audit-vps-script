# audit-vps-script

Run your Virtual Private Server (VPS) in production with confidence. AuditVPS helps you identify and fix common security vulnerabilities in your server through automated security auditing.

![Output](./img/output.png)

## Usage

1. Download the script

```bash
$ curl -O https://raw.githubusercontent.com/healthy-host/audit-vps-script/main/audit-vps.sh
```

2. Make it executable:

```bash
$ chmod +x audit-vps.ch
```

3. Run the security audit:

```bash
$ sudo ./audit-vps.sh
```

### Web version

Visit [https://auditpvps.com](https://auditvps.com) to run checks through our web app for free and render the results in your browser.

## Requirements

- Ubuntu/Debian-based distributions
- `jq` (temporary dependency, planned for removal)
- Root or sudo privileges

## Security checks

The scripts perform the following checks:

- Firewall (UFW)
  - Check if UFW is installed
  - Check if UFW is enabled
  - Check if incoming traffic is blocked
- SSH
  - Check if SSH is enabled
  - Check if key-based authentication is enabled
  - Check if root login is disabled
  - Check if password authentication is disabled
  - Check if SSH is listening on port 22
- Root
  - Check if non-root sudo user exists
- System updates
  - Check if automatic system updates are enabled
  - Check if automatic system upgrades are enabled
- Fail2Ban
  - Check if Fail2ban is installed
  - Check if Fail2ban is enabled
  - Check if Fail2ban is configured correctly
  - Check if Fail2ban SSH is enabled
  - Check if Fail2ban SSH is in aggressive mode

## Contributing

We welcome contributions! If you have any suggestions or improvements, please open an issue or submit a pull request.

## License

MIT

## Roadmap

- [ ] Support for additional Linux distributions:
  - [ ] RHEL/CentOS
  - [ ] Fedora
  - [ ] Alpine Linux
- [ ] Removal of `jq` dependency
- [ ] Warning states (WARN) for non-critical security recommendations
- [ ] Code refactoring to improve readability
