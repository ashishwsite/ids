let newarr=[];
let obj={
    "timestamp": "2019-01-02T06:50:05.309314",
    "flow_id": 43593760,
    "in_iface": "eth0",
    "event_type": "alert",
    "src_ip": "46.100.43.82",
    "src_port": 41261,
    "dest_ip": "138.68.3.71",
    "dest_port": 445,
    "proto": "TCP",
    "alert": {
        "action": "allowed",
        "gid": 1,
        "signature_id": 2403370,
        "rev": 46061,
        "ukey": "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 36",
        "category": "Misc Attack",
        "severity": 2
    }
}
console.log("time length",obj.timestamp.length)
obj.timestamp=obj.slice(13,12);
console.log("time length",obj.timestamp.length)
console.log("user length",obj.alert.ukey.length)