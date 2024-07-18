import{_ as a,o as e,c as t,Q as r}from"./chunks/framework.681fc4ae.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"原生基础/Internet/协议/TCP.IP协议.md","filePath":"原生基础/Internet/协议/TCP.IP协议.md","lastUpdated":1719474694000}'),o={name:"原生基础/Internet/协议/TCP.IP协议.md"},h=r('<h2 id="应用层" tabindex="-1">应用层 <a class="header-anchor" href="#应用层" aria-label="Permalink to &quot;应用层&quot;">​</a></h2><h3 id="包含" tabindex="-1">包含 <a class="header-anchor" href="#包含" aria-label="Permalink to &quot;包含&quot;">​</a></h3><p>HTTP、Telnet、FTP、SMTP等 HTTP（万维网服务）、FTP（文件传输）、SMTP（电子邮件）、SSH（安全远程登陆）、DNS（域名解析）以及许多其他协议。</p><h3 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h3><p>来读取来自传输层的数据或者将数据传输写入传输层 应用层包括所有和应用程序协同工作，并利用基础网络交换应用程序的业务数据的协议。一些特定的程序被认为运行在这个层上，该层协议所提供的服务能直接支持用户应用。</p><h2 id="传输层" tabindex="-1">传输层 <a class="header-anchor" href="#传输层" aria-label="Permalink to &quot;传输层&quot;">​</a></h2><p>传输层的协议，解决了诸如端到端可靠性问题，能确保数据可靠的到达目的地，甚至能保证数据按照正确的顺序到达目的地。 传输层主要有两个性质不同的协议：TCP传输控制协议和UDP用户数据报协议。 TCP协议是一个面向连接的、可靠的传输协议，它提供一种可靠的字节流，能保证数据完整、无损并且按顺序到达。TCP尽量连续不断地测试网络的负载并且控制发送数据的速度以避免网络过载。另外，TCP试图将数据按照规定的顺序发送。 UDP协议是一个无连接的数据报协议，是一个“尽力传递”和“不可靠”协议，不会对数据包是否已经到达目的地进行检查，并且不保证数据包按顺序到达。 总体来说，TCP协议传输效率低，但可靠性强；UDP协议传输效率高，但可靠性略低，适用于传输可靠性要求不高、体量小的数据（比如QQ聊天数据）。</p><h3 id="包含-1" tabindex="-1">包含 <a class="header-anchor" href="#包含-1" aria-label="Permalink to &quot;包含&quot;">​</a></h3><p>UDP、TCP</p><h3 id="作用-1" tabindex="-1">作用 <a class="header-anchor" href="#作用-1" aria-label="Permalink to &quot;作用&quot;">​</a></h3><p>（1）为端到端连接提供传输服务； （2）这种传输服务分为可靠和不可靠的，其中TCP是典型的可靠传输，而UDP则是不可靠传输； （3）为端到端连接提供流量控制、差错控制、QoS(Quality of Service)服务质量等管理服务。</p><h2 id="网络层" tabindex="-1">网络层 <a class="header-anchor" href="#网络层" aria-label="Permalink to &quot;网络层&quot;">​</a></h2><h3 id="包含-2" tabindex="-1">包含 <a class="header-anchor" href="#包含-2" aria-label="Permalink to &quot;包含&quot;">​</a></h3><p>ICMP、IP、IGMP</p><h3 id="作用-2" tabindex="-1">作用 <a class="header-anchor" href="#作用-2" aria-label="Permalink to &quot;作用&quot;">​</a></h3><p>主要负责网络中数据包的传送等 TCP/IP协议网络层的作用是在复杂的网络环境中为要发送的数据报找到一个合适的路径进行传输。简单来说，网络层负责将数据传输到目标地址，目标地址可以是多个网络通过路由器连接而成的某一个地址。另外，网络层负责寻找合适的路径到达对方计算机，并把数据帧传送给对方，网络层还可以实现拥塞控制、网际互连等功能。</p><h2 id="链路层" tabindex="-1">链路层 <a class="header-anchor" href="#链路层" aria-label="Permalink to &quot;链路层&quot;">​</a></h2><h3 id="包含-3" tabindex="-1">包含 <a class="header-anchor" href="#包含-3" aria-label="Permalink to &quot;包含&quot;">​</a></h3><p>ARP、RARP</p><h3 id="作用-3" tabindex="-1">作用 <a class="header-anchor" href="#作用-3" aria-label="Permalink to &quot;作用&quot;">​</a></h3><p>通常包括操作系统中的设备驱动程序和计算机中对应的网络接口卡，它们一起处理与传输媒介（如电缆或其他物理设备）的物理接口细节。 链路层有时也称作数据链路层或网络接口层，用来处理连接网络的硬件部分。该层既包括操作系统硬件的设备驱动、NIC（网卡）、光纤等物理可见部分，还包括连接器等一切传输媒介。在这一层，数据的传输单位为比特。</p>',21),i=[h];function n(l,d,P,s,c,p){return e(),t("div",null,i)}const T=a(o,[["render",n]]);export{_ as __pageData,T as default};
