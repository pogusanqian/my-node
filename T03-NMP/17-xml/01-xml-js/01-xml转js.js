const convert = require('xml-js');
const { getNormalJSON } = require('./03-getNorMalJson');

var xml = `
<?xml version="1.0" encoding="UTF-8"?>
<Root>
  <RegInfoTime>1493802128</RegInfoTime>
  <HostCode>00021-7BB75273CD</HostCode>
  <PCName><![CDATA[tq-f26c201d54d8]]></PCName>
  <IP>192.168.43.32</IP>
  <MAC>00:0C:29:28:68:7E</MAC>
  <UnitId>C27771519FA944758BC21B8D29218634</UnitId>
  <UnitName><![CDATA[万里红科技公司]]></UnitName>
  <DeptId>11</DeptId>
  <DeptName><![CDATA[研发一部]]></DeptName>
  <EmpId>1</EmpId>
  <EmpName><![CDATA[刘勤才]]></EmpName>
  <SecLvl>3</SecLvl>
  <HDCode>W3TCRYJR</HDCode>
  <ExtHDCode>U3TCRYJR,V3TCRYJR</ExtHDCode>
  <Ver>V2.0</Ver>
  <Arch>amd64</Arch>
  <Vendor>zhongfu</Vendor>
  <OS><![CDATA[Centos Linux 7 (Core)]]></OS>
  <Comment><![CDATA[备注]]></Comment>
  <HostType>0</HostType>
  <Machine>05</Machine>
  <PassWordmd5>aclec964bdc163040552392e0307dd40</PassWordmd5>
  <AddressInfo>山东省-济南市-历下区</AddressInfo>
  <IsAdmin>0</IsAdmin>
  <AddressList>
    <AddressInfo>
      <IP>1.1.1.3</IP>
      <SubMask>255.255.255.0</SubMask>
      <GateWay>1.1.1.1</GateWay>
      <MAC>00:0C:29:28:68:7E</MAC>
    </AddressInfo>
    <AddressInfo>
      <IP>1.1.1.3</IP>
      <SubMask>255.255.255.0</SubMask>
      <GateWay>1.1.1.1</GateWay>
      <MAC>00:0C:29:28:68:7E</MAC>
    </AddressInfo>
  </AddressList>
  <AccountList>
    <AccountInfo>
      <Account>root</Account>
    </AccountInfo>
  </AccountList>
</Root>
`;
const unNormalJson = convert.xml2js(xml, {
  // 修剪空格
  trim: true,
  // 采用紧凑型输出
  compact: true,
  // 忽略注释
  ignoreComment: true,
  // 忽略分析声明
  ignoreDeclaration: true,
  // 忽略元素的解析文档类型
  ignoreDoctype: true,
  // element名称转换
  elementNameFn: (val) => val.charAt(0)
    .toLowerCase() + val.slice(1)
});

const json = getNormalJSON(unNormalJson);
console.log(json);
