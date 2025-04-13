import{_ as t,o as n,c as s,e as a}from"./app-a93bcaa0.js";const p={},o=a(`<h1 id="封禁公示" tabindex="-1"><a class="header-anchor" href="#封禁公示" aria-hidden="true">#</a> 封禁公示</h1><h2 id="enum类型代码" tabindex="-1"><a class="header-anchor" href="#enum类型代码" aria-hidden="true">#</a> Enum类型代码</h2><h3 id="表1-已知的封禁原因类型代码总览" tabindex="-1"><a class="header-anchor" href="#表1-已知的封禁原因类型代码总览" aria-hidden="true">#</a> 表1：已知的封禁原因类型代码总览</h3><table><thead><tr><th>代码</th><th>含义</th></tr></thead><tbody><tr><td>1</td><td>刷屏</td></tr><tr><td>2</td><td>抢楼</td></tr><tr><td>3</td><td>发布色情低俗信息</td></tr><tr><td>4</td><td>发布赌博诈骗信息</td></tr><tr><td>5</td><td>发布违禁相关信息</td></tr><tr><td>6</td><td>发布垃圾广告信息</td></tr><tr><td>7</td><td>发布人身攻击言论</td></tr><tr><td>8</td><td>发布侵犯他人隐私信息</td></tr><tr><td>9</td><td>发布引战言论</td></tr><tr><td>10</td><td>发布剧透信息</td></tr><tr><td>11</td><td>恶意添加无关标签</td></tr><tr><td>12</td><td>恶意删除他人标签</td></tr><tr><td>13</td><td>发布色情信息</td></tr><tr><td>14</td><td>发布低俗信息</td></tr><tr><td>15</td><td>发布暴力血腥信息</td></tr><tr><td>16</td><td>涉及恶意投稿行为</td></tr><tr><td>17</td><td>发布非法网站信息</td></tr><tr><td>18</td><td>发布传播不实信息</td></tr><tr><td>19</td><td>发布怂恿教唆信息</td></tr><tr><td>20</td><td>恶意刷屏</td></tr><tr><td>21</td><td>账号违规</td></tr><tr><td>22</td><td>恶意抄袭</td></tr><tr><td>23</td><td>冒充自制原创</td></tr><tr><td>24</td><td>发布青少年不良内容</td></tr><tr><td>25</td><td>破坏网络安全</td></tr><tr><td>26</td><td>发布虚假误导信息</td></tr><tr><td>27</td><td>仿冒官方认证账号</td></tr><tr><td>28</td><td>发布不适宜内容</td></tr><tr><td>29</td><td>违反运营规则</td></tr><tr><td>30</td><td>恶意创建话题</td></tr><tr><td>31</td><td>发布违规抽奖</td></tr><tr><td>32</td><td>恶意冒充他人</td></tr></tbody></table><h3 id="表2-已知的违规类型代码" tabindex="-1"><a class="header-anchor" href="#表2-已知的违规类型代码" aria-hidden="true">#</a> 表2：已知的违规类型代码</h3><table><thead><tr><th>代码</th><th>含义</th></tr></thead><tbody><tr><td>0</td><td>全部类型</td></tr><tr><td>1</td><td>评论</td></tr><tr><td>2</td><td>弹幕</td></tr><tr><td>3</td><td>私信</td></tr><tr><td>4</td><td>标签</td></tr><tr><td>5</td><td>个人资料</td></tr><tr><td>6</td><td>投稿</td></tr><tr><td>8</td><td>专栏</td></tr><tr><td>10</td><td>动态</td></tr><tr><td>11</td><td>相簿</td></tr></tbody></table><h2 id="获取封禁用户公示列表" tabindex="-1"><a class="header-anchor" href="#获取封禁用户公示列表" aria-hidden="true">#</a> 获取封禁用户公示列表</h2><blockquote><p>https://api.bilibili.com/x/credit/blocked/list</p></blockquote><p><em>请求方式：GET</em></p><p>每页最多10项</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>btype</td><td>num</td><td>来源筛选</td><td>非必要</td><td>空：全部类型<br><code>0</code>：系统封禁<br><code>1</code>：风纪仲裁（仲裁系统升级后此类型已不再更新）</td></tr><tr><td>otype</td><td>num</td><td>类型筛选</td><td>非必要</td><td><strong>见<a href="#%E8%A1%A82%E5%B7%B2%E7%9F%A5%E7%9A%84%E8%BF%9D%E8%A7%84%E7%B1%BB%E5%9E%8B%E4%BB%A3%E7%A0%81">表2</a></strong><br>默认为<code>0</code>：全部类型</td></tr><tr><td>pn</td><td>num</td><td>页码</td><td>非必要</td><td>默认为<code>1</code></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td><code>0</code>：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为<code>0</code></td></tr><tr><td>ttl</td><td>num</td><td><code>1</code></td><td></td></tr><tr><td>data</td><td>array</td><td>公示列表</td><td></td></tr></tbody></table><p><code>data</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>object</td><td>封禁公示1</td><td></td></tr><tr><td>n</td><td>object</td><td>封禁公示（n+1）</td><td></td></tr><tr><td>……</td><td>object</td><td>……</td><td>……</td></tr></tbody></table><p><code>data</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>封禁公示id</td><td></td></tr><tr><td>uname</td><td>str</td><td>对象用户名</td><td></td></tr><tr><td>face</td><td>str</td><td>对象用户头像url</td><td></td></tr><tr><td>uid</td><td>num</td><td>对象用户mid</td><td></td></tr><tr><td>originTitle</td><td>str</td><td>来源标题</td><td></td></tr><tr><td>blockedRemark</td><td>str</td><td></td><td></td></tr><tr><td>originUrl</td><td>str</td><td>来源url</td><td></td></tr><tr><td>originContentModify</td><td>str</td><td>裁决正文</td><td></td></tr><tr><td>originType</td><td>num</td><td>来源类型</td><td><strong>见<a href="#%E8%A1%A82%E5%B7%B2%E7%9F%A5%E7%9A%84%E8%BF%9D%E8%A7%84%E7%B1%BB%E5%9E%8B%E4%BB%A3%E7%A0%81">表2</a></strong></td></tr><tr><td>originTypeName</td><td>str</td><td>来源名</td><td></td></tr><tr><td>punishTitle</td><td>str</td><td>公示标题</td><td></td></tr><tr><td>punishTime</td><td>num</td><td>处罚时间</td><td>时间戳</td></tr><tr><td>punishType</td><td>num</td><td>处理手段类型</td><td><code>2</code>：封禁<br><code>3</code>：永久封禁</td></tr><tr><td>punishTypeName</td><td>str</td><td>处理手段名</td><td></td></tr><tr><td>moralNum</td><td>num</td><td><code>0</code>节操值</td><td>被封禁用户节操值均为<code>0</code></td></tr><tr><td>blockedDays</td><td>num</td><td>封禁天数</td><td>永封为<code>0</code></td></tr><tr><td>publishStatus</td><td>num</td><td><code>1</code></td><td>作用尚不明确</td></tr><tr><td>blockedType</td><td>num</td><td>处理来源</td><td><code>0</code>：系统封禁<br>1：风纪仲裁</td></tr><tr><td>blockedForever</td><td>num</td><td>是否永封</td><td><code>0</code>：非永封<br><code>1</code>：永封</td></tr><tr><td>reasonType</td><td>num</td><td>封禁原因类型</td><td><strong>见<a href="#%E8%A1%A81%E5%B7%B2%E7%9F%A5%E7%9A%84%E5%B0%81%E7%A6%81%E5%8E%9F%E5%9B%A0%E7%B1%BB%E5%9E%8B%E4%BB%A3%E7%A0%81%E6%80%BB%E8%A7%88">表1</a></strong></td></tr><tr><td>reasonTypeName</td><td>str</td><td>封禁原因类型名称</td><td></td></tr><tr><td>operatorName</td><td>str</td><td>空</td><td>作用尚不明确</td></tr><tr><td>caseId</td><td>num</td><td>仲裁信息id</td><td>系统封禁时固定为0</td></tr><tr><td>ctime</td><td>num</td><td>创建时间</td><td>时间戳</td></tr><tr><td>commentSum</td><td>num</td><td>该条目评论数</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>查询所有类型，所有来源的第1页的封禁公示列表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/credit/blocked/list&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;btype=&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;otype=0&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;pn=1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1118220</span><span class="token punctuation">,</span>
		<span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;漫城林语&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i2.hdslb.com/bfs/face/970f2da4a58f83879e69e259f4a9d3587cba03f0.jpg&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">135913</span><span class="token punctuation">,</span>
		<span class="token property">&quot;originTitle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;【罗翔】聊聊网络喷子与键盘侠&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;blockedRemark&quot;</span><span class="token operator">:</span> <span class="token string">&quot;内容涉及人身攻击&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;originUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.bilibili.com/video/av752825895&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;originContentModify&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;p&gt;案情：&lt;/p&gt;&lt;p&gt;1、大量刷屏/引战&lt;/p&gt;&lt;p&gt;我看新闻了，竹鼠全部被ZF无害化处理了，看的爽死我了，亏死你们，啊哈哈哈（x10）&lt;/p&gt;&lt;p&gt;【BV16g4y187he，2020-4-21 10：46：23～10：46：47】&lt;/p&gt;&lt;p&gt;2、大量人身攻击&lt;/p&gt;&lt;p&gt;N * * L&lt;/p&gt;&lt;p&gt;Deine Mu**er ist tot. （x10）&lt;/p&gt;&lt;p&gt;【BV1rk4y1R7id，2020-4-21 20：31：08～20：32：23】&lt;/p&gt;&lt;p&gt;3、引战&lt;/p&gt;&lt;p&gt;每次看他厨房乱七八糟的，可能有数不清的小强，你们还看美食看的有味也是奇PA&lt;/p&gt;&lt;p&gt;【BV1Kg4y1z7mA，2020-4-22&amp;nbsp; 00：52：37】&lt;br/&gt;&lt;/p&gt;&lt;p&gt;批注：&lt;/p&gt;&lt;p&gt;满地狼藉招摇过，人皆愤懑怒拳握。&lt;/p&gt;&lt;p&gt;余恶不堪漏夜扫，正气于心涤龌龊。&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;（发现违规引战、人身攻击、刷屏评论，请按照相应分类进行举报。若发现反复进行上述行为，可联系工作人员反馈相关违规账号信息，我们会予以排查。）&lt;/p&gt;&lt;p&gt;（案例感想请发布在小黑屋评论区讨论，请勿骚扰被封禁的用户）&lt;/p&gt;&lt;p&gt;【本次判罚为管理员判定，请注意案件右上无蓝色标记（风纪委员众裁）】&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;originType&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;originTypeName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;评论&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;punishTitle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在评论中发布人身攻击言论&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;punishTime&quot;</span><span class="token operator">:</span> <span class="token number">1587494264</span><span class="token punctuation">,</span>
		<span class="token property">&quot;punishType&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
		<span class="token property">&quot;punishTypeName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;永久封禁&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;moralNum&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;blockedDays&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;publishStatus&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;blockedType&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;blockedForever&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;reasonType&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
		<span class="token property">&quot;reasonTypeName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;发布人身攻击言论&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;operatorName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;caseId&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1587494264</span><span class="token punctuation">,</span>
		<span class="token property">&quot;commentSum&quot;</span><span class="token operator">:</span> <span class="token number">606</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1091621</span><span class="token punctuation">,</span>
		<span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;风纪委员会会长零八&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/face/6ea4296f7591b9a724f540a41d48df728a0881b0.jpg&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">305542374</span><span class="token punctuation">,</span>
		<span class="token property">&quot;originTitle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;巅峰赛大乔游走辅助，队友说自家法师湖南卫视都不敢像法师这么演哈哈！&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;blockedRemark&quot;</span><span class="token operator">:</span> <span class="token string">&quot;内容涉及传播不实信息&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;originUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.bilibili.com/video/av882552073&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;originContentModify&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;p&gt;具体违规情况说明：&lt;/p&gt;&lt;ol class=\\&quot; list-paddingleft-2\\&quot; style=\\&quot;list-style-type: decimal;\\&quot;&gt;&lt;li&gt;&lt;p&gt;经查实确认，该账号&lt;span style=\\&quot;text-decoration: underline;\\&quot;&gt;从未申请&lt;/span&gt;亦&lt;span style=\\&quot;text-decoration: underline;\\&quot;&gt;从未担任&lt;/span&gt;过风纪委员职务。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;发布多条 “您的稿件/评论涉及违规，即将下架/删除”的恐吓性言论。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;谎称曾经封禁了某个up主，事实上风纪委员&lt;span style=\\&quot;text-decoration: underline;\\&quot;&gt;无法封禁up主投稿&lt;/span&gt;，且该up也从未被封禁。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;威胁他人“要不要到小黑屋坐坐”，事实上风纪委员无法直接封禁用户。通过管理员封禁或风纪委员投票封禁的账号亦有据实申诉的机会。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;故意挑衅他人“那你可以试着骂我，我们试试（举报）有没有用”。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;误导他人“此评论区和弹幕无需保持礼仪”。&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;&lt;p&gt;批注：&lt;/p&gt;&lt;p&gt;如您发现：假冒风纪委员身份招摇撞骗、炫耀风纪委员身份、借风纪委员职务之便威胁恐吓他人、在风纪观点中发布违规内容等违规行为，请及时联系我们进行举报。您可直接将举报材料发送至judgement@bilibili.com。&lt;/p&gt;&lt;p&gt;（案例感想请发布在小黑屋评论区讨论，请勿骚扰被封禁的用户）&lt;/p&gt;&lt;p&gt;【本次判罚为管理员判定，请注意案件右上无蓝色标记（风纪委员众裁）】&lt;/p&gt;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;originType&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;originTypeName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;评论&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;punishTitle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在评论中发布传播不实信息&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;punishTime&quot;</span><span class="token operator">:</span> <span class="token number">1585560309</span><span class="token punctuation">,</span>
		<span class="token property">&quot;punishType&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token property">&quot;punishTypeName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;封禁&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;moralNum&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;blockedDays&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
		<span class="token property">&quot;publishStatus&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;blockedType&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;blockedForever&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;reasonType&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
		<span class="token property">&quot;reasonTypeName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;发布传播不实信息&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;operatorName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;caseId&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1585560309</span><span class="token punctuation">,</span>
		<span class="token property">&quot;commentSum&quot;</span><span class="token operator">:</span> <span class="token number">2379</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> 
    …………
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="封禁处理公示详情" tabindex="-1"><a class="header-anchor" href="#封禁处理公示详情" aria-hidden="true">#</a> 封禁处理公示详情</h2><blockquote><p>https://api.bilibili.com/x/credit/blocked/info</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>封禁公示id</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误<br>-404：无此信息</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为<code>0</code></td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>封禁公示id</td><td></td></tr><tr><td>uname</td><td>str</td><td>对象用户名</td><td></td></tr><tr><td>face</td><td>str</td><td>对象用户头像url</td><td></td></tr><tr><td>uid</td><td>num</td><td>对象用户mid</td><td></td></tr><tr><td>originTitle</td><td>str</td><td>来源标题</td><td></td></tr><tr><td>blockedRemark</td><td>str</td><td></td><td></td></tr><tr><td>originUrl</td><td>str</td><td>来源url</td><td></td></tr><tr><td>originContentModify</td><td>str</td><td>裁决正文</td><td></td></tr><tr><td>originType</td><td>num</td><td>来源类型</td><td><strong>见<a href="#%E8%A1%A82%E5%B7%B2%E7%9F%A5%E7%9A%84%E8%BF%9D%E8%A7%84%E7%B1%BB%E5%9E%8B%E4%BB%A3%E7%A0%81">表2</a></strong></td></tr><tr><td>originTypeName</td><td>str</td><td>来源名</td><td></td></tr><tr><td>punishTitle</td><td>str</td><td>公示标题</td><td></td></tr><tr><td>punishTime</td><td>num</td><td>处罚时间</td><td>时间戳</td></tr><tr><td>punishType</td><td>num</td><td>处理手段类型</td><td><code>2</code>：封禁<br><code>3</code>：永久封禁</td></tr><tr><td>punishTypeName</td><td>str</td><td>处理手段名</td><td></td></tr><tr><td>moralNum</td><td>num</td><td><code>0</code>节操值</td><td>被封禁用户节操值均为<code>0</code></td></tr><tr><td>blockedDays</td><td>num</td><td>封禁天数</td><td>永封为<code>0</code></td></tr><tr><td>publishStatus</td><td>num</td><td><code>1</code></td><td>作用尚不明确</td></tr><tr><td>blockedType</td><td>num</td><td>处理来源</td><td><code>0</code>：系统封禁<br><code>1</code>：风纪仲裁</td></tr><tr><td>blockedForever</td><td>num</td><td>是否永封</td><td><code>0</code>：非永封<br><code>1</code>：永封</td></tr><tr><td>reasonType</td><td>num</td><td>封禁原因类型</td><td><strong>见<a href="#%E8%A1%A81%E5%B7%B2%E7%9F%A5%E7%9A%84%E5%B0%81%E7%A6%81%E5%8E%9F%E5%9B%A0%E7%B1%BB%E5%9E%8B%E4%BB%A3%E7%A0%81%E6%80%BB%E8%A7%88">表1</a></strong></td></tr><tr><td>reasonTypeName</td><td>str</td><td>封禁原因类型名称</td><td></td></tr><tr><td>operatorName</td><td>str</td><td>空</td><td>作用尚不明确</td></tr><tr><td>caseId</td><td>num</td><td>仲裁信息id</td><td>系统封禁时固定为0</td></tr><tr><td>ctime</td><td>num</td><td>创建时间</td><td>时间戳</td></tr><tr><td>commentSum</td><td>num</td><td>该条目评论数</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>查询公示id为<code>1091621</code>的公示详情</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/credit/blocked/info&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;id=1091621&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1091621</span><span class="token punctuation">,</span>
		<span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;风纪委员会会长零八&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/face/6ea4296f7591b9a724f540a41d48df728a0881b0.jpg&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">305542374</span><span class="token punctuation">,</span>
		<span class="token property">&quot;originTitle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;巅峰赛大乔游走辅助，队友说自家法师湖南卫视都不敢像法师这么演哈哈！&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;blockedRemark&quot;</span><span class="token operator">:</span> <span class="token string">&quot;内容涉及传播不实信息&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;originUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.bilibili.com/video/BV1qK4y1C7dd&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;originContentModify&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;p&gt;具体违规情况说明：&lt;/p&gt;&lt;ol class=\\&quot; list-paddingleft-2\\&quot; style=\\&quot;list-style-type: decimal;\\&quot;&gt;&lt;li&gt;&lt;p&gt;经查实确认，该账号&lt;span style=\\&quot;text-decoration: underline;\\&quot;&gt;从未申请&lt;/span&gt;亦&lt;span style=\\&quot;text-decoration: underline;\\&quot;&gt;从未担任&lt;/span&gt;过风纪委员职务。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;发布多条 “您的稿件/评论涉及违规，即将下架/删除”的恐吓性言论。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;谎称曾经封禁了某个up主，事实上风纪委员&lt;span style=\\&quot;text-decoration: underline;\\&quot;&gt;无法封禁up主投稿&lt;/span&gt;，且该up也从未被封禁。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;威胁他人“要不要到小黑屋坐坐”，事实上风纪委员无法直接封禁用户。通过管理员封禁或风纪委员投票封禁的账号亦有据实申诉的机会。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;故意挑衅他人“那你可以试着骂我，我们试试（举报）有没有用”。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;误导他人“此评论区和弹幕无需保持礼仪”。&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;&lt;p&gt;批注：&lt;/p&gt;&lt;p&gt;如您发现：假冒风纪委员身份招摇撞骗、炫耀风纪委员身份、借风纪委员职务之便威胁恐吓他人、在风纪观点中发布违规内容等违规行为，请及时联系我们进行举报。您可直接将举报材料发送至judgement@bilibili.com。&lt;/p&gt;&lt;p&gt;（案例感想请发布在小黑屋评论区讨论，请勿骚扰被封禁的用户）&lt;/p&gt;&lt;p&gt;【本次判罚为管理员判定，请注意案件右上无蓝色标记（风纪委员众裁）】&lt;/p&gt;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;originType&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;originTypeName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;评论&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;punishTitle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在评论中发布传播不实信息&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;punishTime&quot;</span><span class="token operator">:</span> <span class="token number">1585560309</span><span class="token punctuation">,</span>
		<span class="token property">&quot;punishType&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token property">&quot;punishTypeName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;封禁&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;moralNum&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;blockedDays&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
		<span class="token property">&quot;publishStatus&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;blockedType&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;blockedForever&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;reasonType&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
		<span class="token property">&quot;reasonTypeName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;发布传播不实信息&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;operatorName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;caseId&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1585560309</span><span class="token punctuation">,</span>
		<span class="token property">&quot;commentSum&quot;</span><span class="token operator">:</span> <span class="token number">2379</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,37),e=[o];function d(r,l){return n(),s("div",null,e)}const u=t(p,[["render",d],["__file","banlist.html.vue"]]);export{u as default};
