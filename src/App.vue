<template>
  <div id="app" class="page-component__scroll">
    <div class="fixedimage">
      <img :src="fixedimageChoose" alt="">
    </div>
    <div class="index">
      <div class="header">
        <a href="#index">首页</a>
        <a href="#yinyan">引言</a>
        <a href="#yichongre">Z世代的异宠热</a>
        <a href="#kunjing">陷入孤岛的困境</a>
        <a href="#shangtong">互相伤害后的呜咽</a>
        <a href="#weisheng">尾声</a>
      </div>
      <div class="opcity-container">
        <!-- <div class="fix-nail"></div> -->
        <div class="title-words title-words1">
          <div>异宠热袭来: </div>
          <div>真正的爱是生命对生命的</div>
        </div>
      </div>
    </div>
    <div class="introduction-head" id="yinyan">
      <div class="section-title">
        <div class="title-words">引言</div>
        <div class="title-border"></div>
        <div class="opcity-container-words">
          <!-- <div class="fix-nail"></div> -->
          <div class="introduction-words">
            从王校长的柯尔鸭、羊驼萌翻网友，到今天社交网站大火的暹罗鳄饲养日常，<span class="introduction-special-words">宠物经济疯狂，Z世代下的异宠热正急剧升温</span>，
            人类已不止于驯化饲养猫狗，而是在“另类”宠物的饲养中寻找新的满足感。当一众人饲养异宠如痴如醉时，
            总会传来不解、讽刺甚至谩骂的声音。“因为爬宠很炫酷、养起来很简单他们的品种非常多样，
            更出于对这些动物的喜爱”“蛇和那些爬行动物的花纹难以接受，看见就会恶心”“这不就是些五毒四害”“冷血动物没有感情”
            “这些都是在野生动物饲养会有很大危害”这些都是网民就异宠话题的讨论。
            喜爱异宠的人可能只有一个理由而厌恶它们的人可能有千万个理由。在异宠热的持续冲击下，
            应该接受还是抗拒，应该表达喜爱还是厌恶？面对这些疑问，<span class="introduction-special-words">此篇无意行走在“爱恨”之间，而是把这些感受放到一边，先去了解，深刻的了解便是一切的基础。</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="image-container">
      <el-row :gutter="30" style="padding:0 20px; margin: 20px 0;">
        <el-col :span="6"  v-for="(item, index) in imageArr1" class="image-item-card-col" :key="index">
          <el-card :body-style="{ padding: '0px' }" class="image-item-card">
            <img :src="item"
              class="image">
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="30" style="padding:0 20px; margin: 20px 0;">
        <el-col :span="6"  v-for="(item, index) in imageArr2" class="image-item-card-col" :key="index">
          <el-card :body-style="{ padding: '0px' }" class="image-item-card">
            <img :src="item"
              class="image">
          </el-card>
        </el-col>
      </el-row>
    </div> -->
    <div class="introduction" id="yichongre">
      <div class="section-title">
        <div class="title-words">Z世代的异宠热</div>
        <div class="title-border"></div>
        <div class="explain-words">
          <span>异宠与异宠主画像</span>
        </div>
      </div>
    </div>
    <div class="words-content-container">
      <div class="opcity-container-words">
        <!-- <div class="fix-nail"></div> -->
        <div class="introduction-words">
          异宠一般指另类宠物或异域宠物（本篇所研究不包括植物），其中包含另类水族动物、小型哺乳动物、爬行动物、昆虫、节肢动物等。历史数据表明，一些文化中，饲养异宠已有几千年历史。
          <span class="introduction-special-words">早在公元前4000年，</span>
          古埃及人就饲养鸟类作为伴侣动物；最早有关金鱼选育作为观赏的记录可追溯至
          <span class="introduction-special-words">中国宋代。</span>
          20世纪以来，异宠大受欢迎，异宠贸易迅速增长，中国养宠物的家庭从
          <span class="introduction-special-words">2017年5912万至2021年6844万</span>
          其中异宠饲养率也从
          <span class="introduction-special-words">35.7%增至53%，</span>
          这不断证明人类与动物远距离接触的壁垒已然被打破，在与更多种类动物的相处过程中，人类不断触及新鲜刺激的领域。但异宠主在宠物主中仍占少数，其中
          <span class="introduction-special-words">90后、00后</span>
          饲养者为主力军共占<span class="introduction-special-words">84.6%,</span>家庭月收入在5000—10000元有30.8%,
          <span class="introduction-special-words">男性</span>的比率<span
            class="introduction-special-words">超过半数</span>且集中分布在
          <span class="introduction-special-words">一线城市以及新一线城市，</span>这表明饲养异宠的是年轻，有一定经济能力，在较发达城市有开放视野和思想的小众群体。
        </div>
      </div>
    </div>
    <tableChartVue id="chart1" :data="chartData.option1" :isMounted="chartOption1" :chartId="'option1'"
      :title="'2017-2021年各异宠购买比例'" :footer="'[数据来源：《2017-2021年中国宠物行业白皮书》]'" :height="500" :width="90"></tableChartVue>

    <ChartEightTeenVue id="chart2" :isMounted="chartOption2" :title="'具体异宠的购买渗透率(点击圆柱查看详细信息)'"
      :footer="'[数据来源：《2017-2021年中国宠物行业白皮书》]'" :height="500" :width="90"></ChartEightTeenVue>

    <tableChartVue id="chart3" :data="chartData.option4" :chartId="'option4'" :isMounted="chartOption3" :title="'不同级城市各异宠购买情况'"
      :footer="'[数据来源：《艾瑞咨询：2021年中国宠物消费趋势白皮书》]'" :height="500" :width="90"></tableChartVue>
    
    <!-- 各类异宠主年龄在35-45的比例 -->
    <tableChartVue id="chart4" :data="chartData.option13" :chartId="'option13'" :isMounted="chartOption4" :title="'各类异宠主年龄在35-45的比例'"
      :footer="'[数据来源：《艾瑞咨询：2021年中国宠物消费趋势白皮书》]'" :height="500" :width="80"></tableChartVue>
    
    <tableChartVue id="chart5" :data="chartData.option31" :chartId="'option31'" :isMounted="chartOption5" :title="'异宠主年龄结构'"
      :footer="'[数据来源：线上220份异宠玩家调查问卷]'" :height="500" :width="60"></tableChartVue>

    <!-- 各类异宠主为男性的比例 -->
    <tableChartVue id="chart6" :data="chartData.option14" :chartId="'option14'" :isMounted="chartOption6" :title="'各类异宠主为男性的比例'"
      :footer="'[数据来源：《艾瑞咨询：2021年中国宠物消费趋势白皮书》]'" :height="500" :width="90"></tableChartVue>

    <tableChartVue id="chart7" :data="chartData.option30" :chartId="'option30'" :isMounted="chartOption7" :title="'异宠主家庭月收入'"
      :footer="'[数据来源：线上220份异宠玩家调查问卷]'" :height="400" :width="90"></tableChartVue>

    <tableChartVue id="chart8" :data="chartData.option27" :chartId="'option27'" :isMounted="chartOption8" :title="'异宠购买方式总览'"
      :footer="'[数据来源：《艾瑞咨询：2021年中国宠物消费趋势白皮书》]'" :height="500" :width="90"></tableChartVue>

    
    
      <!-- 不同级城市各异宠购买情况 -->
    
    
    
    
    
    
    
    
      <!-- 各类异宠适宜的温湿度 -->
    
    
    
    
    
    
    
      <!-- <div class="image-container">
      <el-row :gutter="30" style="padding:0 20px; margin: 20px 0;">
        <el-col :span="6"  v-for="(item, index) in imageArr3" class="image-item-card-col" :key="index">
          <el-card :body-style="{ padding: '0px' }" class="image-item-card">
            <img :src="item"
              class="image">
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="30" style="padding:0 20px; margin: 20px 0;">
        <el-col :span="6"  v-for="(item, index) in imageArr4" class="image-item-card-col" :key="index">
          <el-card :body-style="{ padding: '0px' }" class="image-item-card">
            <img :src="item"
              class="image">
          </el-card>
        </el-col>
      </el-row>
    </div> -->
    <div class="introduction" id="kunjing">
      <div class="section-title">
        <div class="title-words">陷入“孤岛”困境</div>
        <div class="title-border"></div>
        <div class="explain-words">
          <span>“我们异宠主人数较少，宠物生活环境装造很复杂，每次带<br>宠物出行、就医非常不便，也遭受过很多人异样的眼光”</span>
        </div>

      </div>
    </div>
    <div class="words-content-container">
      <div class="opcity-container-words">
        <!-- <div class="fix-nail"></div> -->
        <div class="introduction-words">
          浓厚的猎奇心理是青年的标志，这也导致异宠饲养主年龄趋于低龄。在鼓励他们通过饲养异宠学习知识的同时，还应当谨慎网络和各大平台错误虚假信息的误导。数据显示异宠在平台的
          <span class="introduction-special-words">热度占5%—15%。</span>
          人工搜集各平台<span class="introduction-special-words">185位博主</span>发现，
          每类博主粉丝量以及关于异宠视频点赞量居于<span class="introduction-special-words">前10</span>的<span class="introduction-special-words"></span>均在百万千万级以上，他们有着不可忽视的
          <span class="introduction-special-words">影响力，但其中仅有42位发布内容具有科普性和学习价值。</span>
          数据表明有<span class="introduction-special-words">62.5%</span>的异宠、宠物博主布视频的真实目的为<span
            class="introduction-special-words">获得大量粉丝求得关注</span>。
          同时各大销售平台售卖异宠的价格在<span class="introduction-special-words">一元至百万元</span>之间相差悬殊。
          而“异宠”检索记录最高可达<span class="introduction-special-words">270000条</span>，大量泥沙俱下的信息带来的繁琐筛选工作
          <span class="introduction-special-words">形成了人与异宠的新屏障，
          但同时也推进着人类对异宠的深入了解</span>。此外各平台没有对购买人群有年龄的限制与监督，
          网络传播有关异宠的内容鱼龙混杂，<span class="introduction-special-words">未成年人好奇心使然尚未对购买的宠物有详细的了解，
          47%</span>的异宠初次购买者<span class="introduction-special-words">几乎没有花时间研究所购买的动物</span>，而我国仅有<span class="introduction-special-words">52%</span>的饲养者意识到自己饲养的是异宠。
          <span class="introduction-special-words">异宠主囿于人数劣势，异宠相关数据繁杂，异宠本身信息少，被迫陷入了“孤岛”困境。</span>
        </div>
      </div>
    </div>

    <!-- 表格 -->
    <ChartNineTeen id="chart9" :isMounted="chartOption9" :title="'社交平台各宠物热度比例'"
      :footer="'[数据来源：《艾瑞咨询：2021年中国宠物消费趋势白皮书》]'" :height="500" :width="90"></ChartNineTeen>
    <tableChartVue id="chart10" :data="chartData.option21" :chartId="'option21'" :isMounted="chartOption10" :title="'视频内容主题观众感兴趣比例'"
      :footer="'[数据来源：《艾瑞咨询：2021年中国宠物消费趋势白皮书》]'" :height="500" :width="90"></tableChartVue>
    <tableChartVue id="chart11" :data="chartData.option23" :chartId="'option23'" :isMounted="chartOption11" :title="'微博萌宠红人做博主动机'"
      :footer="'[数据来源：《艾瑞咨询：2021年中国宠物消费趋势白皮书》]'" :height="500" :width="90"></tableChartVue>
    <tableChartVue id="chart12" :data="chartData.option20" :chartId="'option20'" :isMounted="chartOption12" :title="'知名博主粉丝数及点赞数'"
      :footer="'[数据来源：互联网人工搜集整合]'" :height="500" :width="90"></tableChartVue>
    <!-- 各类异宠b站视频播放量 -->
    <tableChartVue id="chart13" :data="chartData.option15" :chartId="'option15'" :isMounted="chartOption13" :title="'各类异宠b站视频播放量'"
      :footer="'[数据来源：互联网人工搜集整合]'" :height="500" :width="90"></tableChartVue>
    <tableChartVue id="chart14" :data="chartData.option25" :chartId="'option25'" :isMounted="chartOption14" :title="'销售平台各类异宠销售数据(点击图例切换)'"
      :footer="'[数据来源：互联网人工搜集整合]'" :height="500" :width="90"></tableChartVue>

    <div class="words-content-container">
      <div class="opcity-container-words">
        <!-- <div class="fix-nail"></div> -->
        <div class="introduction-words">
          《2021年宠物医疗行业白皮书》数据显示宠物
          <span class="introduction-special-words">总病例142624例，异宠已达到1673例</span>。异宠体型小，但喂养的食粮并不便宜，价格普遍在
          <span class="introduction-special-words">百元</span>，
          同时饲养环境要求严格，根据不同异宠的生活特性，主人需要严格把握异宠生活的温度湿度光照以及食量，
          而这些数字准确性需要时间的考量，其中大部分数据依旧<span class="introduction-special-words">未知</span>。就人工搜索
          <span class="introduction-special-words">29种</span>
          异宠而言，未知光照的有<span class="introduction-special-words">12种</span>。
          <span class="introduction-special-words">可能再完备的环境设施，都不如生物之间的物竞天择，再准确的温湿度都抵不上大自然的实时调节。</span>
        </div>
      </div>
    </div>

    <tableChartVue id="chart15" :data="chartData.option17" :chartId="'option17'" :isMounted="chartOption15" :title="'各异宠用品购买及购买渠道渗透率'"
      :footer="'[数据来源：《艾瑞咨询：2021年中国宠物消费趋势白皮书》]'" :height="500" :width="90"></tableChartVue>
    <tableChartVue id="chart16" :data="chartData.option22" :chartId="'option22'" :isMounted="chartOption16" :title="'水族动物用品购买率'"
      :footer="'[数据来源：《艾瑞咨询：2021年中国宠物消费趋势白皮书》]'" :height="600" :width="90"></tableChartVue>
    <tableChartVue id="chart17" :data="chartData.option12" :chartId="'option12'" :isMounted="chartOption17" :title="'各类异宠适宜的温湿度'"
      :footer="'[数据来源：互联网人工搜集整合]'" :height="500" :width="90"></tableChartVue>


    <div class="words-content-container">
      <div class="opcity-container-words">
        <!-- <div class="fix-nail"></div> -->
        <div class="introduction-words">
          根据百度地图数据统计，2022年全国有<span class="introduction-special-words">223395家</span>宠物医院较2020年增长
          <span class="introduction-special-words">562家</span>，
          <span class="introduction-special-words">但异宠医院仅从95家增长至203家</span>，且集中分布在
          <span class="introduction-special-words">一线及新一线城市</span>，这些异宠医院能治疗异宠的也只有小部分医师或只有
          <span class="introduction-special-words">院长</span>。
          根据《东方头条》报道，专科异宠医生稀缺，全上海数量<span class="introduction-special-words">不足10位</span>。异宠常患病症种类繁多，由于能治疗的机构少，
          异宠体型小治疗操作复杂困难，异宠容易错过治疗的最佳时期。
          有仓鼠主自述，仓鼠当时购买的价格为<span class="introduction-special-words">30元</span>去宠物医院就诊共花费约
          <span class="introduction-special-words">3800元，
          医疗设施匮乏医疗行业无确定标准规范，服务价格高昂导致异宠就医困难，这也缩短了异宠的寿命。</span>
        </div>
      </div>
    </div>
    <!-- 不同级城市异宠医疗资源 -->
    <tableChartVue id="chart18" :data="chartData.option5" :chartId="'option5'" :isMounted="chartOption18" :title="'不同级城市异宠医疗资源'"
      :footer="'[数据来源：百度地图、宠物行业观察]'" :height="500" :width="90"></tableChartVue>
    <tableChartVue id="chart19" :data="chartData.option28" :chartId="'option28'" :isMounted="chartOption19" :title="'异宠就医遇到的问题(点击图表获得信息)'"
      :footer="'[数据来源：《南都民调：宠物消费调查报告（2022）》]'" :height="400" :width="60" :isClick="true" @showchartdetailinfo="showChartDetailInfo"></tableChartVue>
    <!-- 各类异宠常患病症 -->
    <tableChartVue id="chart20" :data="chartData.option10" :chartId="'option10'" :isMounted="chartOption20" :title="'各类异宠常患病症'"
      :footer="'[数据来源：《异宠兽医：“病宠”千奇百怪，治疗无分贵贱》]'" :height="500" :width="90"></tableChartVue>
    <div class="words-content-container">
      <div class="opcity-container-words">
        <!-- <div class="fix-nail"></div> -->
        <div class="introduction-words">
          经过几年悉心的饲养，异宠终将面临死亡。数据显示在各类异宠中<span class="introduction-special-words">寿命最低的不足一年而最高寿命可达70年</span>。
          南都民调显示，宠物死后倾向于给宠物找专业殡葬服务的主人中，<span class="introduction-special-words">00 后占48.39%，80后49.06%、90后44.50%；</span>
          从宠物类型来看，<span class="introduction-special-words">饲养仓鼠、龟蛇等更多是选择就地埋葬，分别占40.43%、37.5%。“无法面对告别”</span>是异宠主的心理难题，
          <span class="introduction-special-words">“如何处理异宠尸体”</span>则是留给他们最后的道德难题。
          《2017年中国宠物行业白皮书》显示，专业性殡葬服务逐渐成为宠物主人的服务消费项目，
          <span class="introduction-special-words">有53.9%的人愿意在宠物去世后购买火化、墓地等专业化殡葬服务。</span>
          但目前社会出台的相关法律政策仅有<span class="introduction-special-words">2部</span>却均未具体规范异宠尸体的处理方式，
          这也导致异宠殡葬“花样百出”。宠物异宠殡葬行业使用“人格化”等设施和方式试图抚慰主人失去动物的伤痛，但细究其根本<span class="introduction-special-words">宠物丧葬仍属于灰色地带</span>。
          其中<span class="introduction-special-words">《殡葬管理条例》 主要针对人体</span>，不适用于宠物。<span class="introduction-special-words">动物防疫法等相关法律法规，
          主要是针对动物尸体无害化处理</span>，并未提及动物殡葬。
          按照规定，宠物殡葬涉及动物集中无害化处理，需要办理《动物防疫条件合格证》，<span class="introduction-special-words">但是目前相关审批门槛较高</span>。无论自制火化车还是私人购置火化炉，
          都是违法行为。<span class="introduction-special-words">宠物殡葬师也没有被人社部门列入正式职业</span>，缺乏从业资格培训和认证，
          因此一些人并不具备相应服务能力。另一方面，<span class="introduction-special-words">宠物殡葬服务价格差异很大，服务水平参差不齐</span>。此外，涉及消费纠纷如何处理，也缺乏参考标准。
        </div>
      </div>
    </div>
    <!--  -->
    <!-- 各异宠平均寿命 -->
    <tableChartVue id="chart21" :data="chartData.option16" :chartId="'option16'" :isMounted="chartOption21" :title="'各异宠平均寿命'"
      :footer="'[数据来源：互联网人工搜集整合]'" :height="500" :width="90"></tableChartVue>
    <!-- 宠物主对宠物殡葬的了解程度 -->
    <tableChartVue id="chart22" :data="chartData.option7" :chartId="'option7'" :isMounted="chartOption22" :title="'宠物主对宠物殡葬的了解程度'"
      :footer="'[数据来源：《南都民调：宠物消费调查报告（2022）》]'" :height="500" :width="60"></tableChartVue>
    <!-- 宠物主对宠物殡葬的看法 -->
    <tableChartVue id="chart23" :data="chartData.option6" :chartId="'option6'" :isMounted="chartOption23" :title="'宠物主对宠物殡葬的看法'"
      :footer="'[数据来源：《南都民调：宠物消费调查报告（2022）》]'" :height="500" :width="90"></tableChartVue>
    <!-- 处理宠物尸体方式 -->
    <tableChartVue id="chart24" :data="chartData.option8" :chartId="'option8'" :isMounted="chartOption24" :title="'处理宠物尸体方式'"
      :footer="'[数据来源：《南都民调：宠物消费调查报告（2022）》]'" :height="500" :width="90"></tableChartVue>
    

    <!--  -->
    <div class="introduction" id="shangtong">
      <div class="section-title">
        <div class="title-words">互相伤害后的呜咽</div>
        <div class="title-border"></div>
        <div class="explain-words">
          <span>“陕西省一女大学生网购银环蛇后被咬，隐瞒伤情六天后去世”</span>
        </div>
        <div class="explain-words">
          <span>“根据统计，当前野生动物网络非法贸易已排全世界网络犯罪的第五位”</span>
        </div>

      </div>
    </div>
    <div class="words-content-container">
      <div class="opcity-container-words">
        <!-- <div class="fix-nail"></div> -->
        <div class="introduction-words">
          人类在饲养异宠与之相处的期间总伴随着“相爱相杀”的行为，互相伤害的事件在法律或是道德的审判下足以致命。
          人类尚未完全驯服异宠仍对其没有足够的了解，大部分异宠还未产生适应人工饲养的特性，在调研中的
          <span class="introduction-special-words">1410种人类疾病，61%有动物性致病源引发，
          200种人畜共患病中70种与异宠有关。</span>生活中异宠伤人“越狱”事件屡见不鲜，在搜集已报道的34件伤人事件发现，
          受害者年龄集中在<span class="introduction-special-words">16—25岁</span>，若受害者伤口未及时就医在极端情况下可
          <span class="introduction-special-words">导致死亡</span>。同时着眼当下，就近年来世界所发生的重大公共卫生事件，
          肆虐全球的新冠病毒，和始料未及的猴痘病毒而言，抛开未经核实的阴谋论，我们很难不将这些人畜共患病的紧急事件与野生动物、异宠饲养加以联系。
          但与此同时以营利为目地的咖啡馆、生活馆以“异宠”为噱头吸引大量年轻人打卡拍照，
          而根据国家市场监管总局2018年7月发布的《餐饮服务食品安全操作规范》所述，
          <span class="introduction-special-words">“餐饮服务场所内不得饲养禽、畜等动物”这表明异宠主题的餐饮行业显然有违规范</span>。
        </div>
      </div>
    </div>
    <!-- 各类异宠的伤害行为 -->
    <tableChartVue id="chart25" :data="chartData.option11" :chartId="'option11'" :isMounted="chartOption25" :title="'各类异宠的伤害行为'"
      :footer="'[数据来源：互联网人工搜集整合]'" :height="500" :width="90"></tableChartVue>
    <tableChartVue id="chart26" :data="chartData.option2" :chartId="'option2'" :isMounted="chartOption26" :title="'2018-2022年全国宠物、异宠展'"
      :footer="'[数据来源：宠物行业观察]'" :height="500" :width="90"></tableChartVue>
    <!-- 2019、2022年部分城市异宠生活咖啡馆数量 -->
    <tableChartVue id="chart27" :data="chartData.option3" :chartId="'option3'" :isMounted="chartOption27" :title="'2019、2022年部分城市异宠生活咖啡馆数量'"
      :footer="'[数据来源：百度地图、《2019年中国宠物行业白皮书》]'" :height="500" :width="90"></tableChartVue>
    <div class="words-content-container">
      <div class="opcity-container-words">
        <!-- <div class="fix-nail"></div> -->
        <div class="introduction-words">
          异宠市场异军突起，市场需求量急剧扩大。<span class="introduction-special-words">跨国商业空运和全球网络互联</span>，这两个因素从供需两方面刺激了异宠贸易， 
          导致处在供应链的商家铤而走险违法贩卖国家保护动物。
          <span class="introduction-special-words"></span>人工搜索中国裁判文书网110起有关异宠犯罪案件发现，涉案异宠为
          <span class="introduction-special-words">国家二级保护动物有4470件，有98起违法原因为盈利谋私。2022年一季度，全国海关共截获检疫性有害生物173种，13900次</span>，
          甚至我国是世界上遭受外来物种入侵最严重的国家之一，<span class="introduction-special-words">截止2020年，已知的入侵物种高达660余种</span>，以西南和沿海地区最为严重。
          违法供应的背后是消费者看不见的血泪，异宠在野外被捕获后<span class="introduction-special-words">死亡率高达90%</span>，即使活下来也可能面临
          <span class="introduction-special-words">终身慢性疾病</span>的折磨，
          而<span class="introduction-special-words">人工繁殖</span>出的动物在运输、繁殖、圈养各阶段它们都可能承受巨大痛苦：生存空间狭小、环境恶劣、
          至少<span class="introduction-special-words">75%两栖爬宠在人工饲养环境下生存不过一年</span>、强迫连续受孕、跨种群配种等。
          同时<span class="introduction-special-words">放生或被遗弃的异宠可能会造成物种入侵，破坏当地生态链</span>，贻害无穷。
          <div style="width: 100%;text-indent: 60px;">
            由于<span class="introduction-special-words">购买成本小，异宠体型小，发现概率小，救助站少</span>，异宠主对抛弃行为不会轻易付出代价。
            据北京市野生动物救护中心提供的数据表示，仅2020年3月份以来，该救护中心就已经接收到遗弃、走失、执法机关罚没、
            以及市民主动送交的<span class="introduction-special-words">各类“异宠”23种近50只</span>。面对这些险象，麦克维尔指出，应当
            <span class="introduction-special-words">开展异宠贸易和养殖现状调查，
            全面评估异宠贸易对公众健康、动物福利、野生种群以及本土生态系统的影响，完善异宠饲养的规范和管理体系。
            加强公众宣传，指导公众了解异宠贸易带来的动物福利问题及健康、生态风险。</span>
          </div>
          
        </div>
      </div>
    </div>
    <!-- 非法售卖走私野生异宠 -->
    <tableChartVue id="chart28" :data="chartData.option9" :chartId="'option9'" :isMounted="chartOption28" :title="'非法售卖走私野生异宠(点击图表获得信息)'"
      :footer="'[数据来源：中国裁判文书网关键字“异宠”]'" :height="500" :width="90" :isClick="true" @showchartdetailinfo="showChartDetailInfo"></tableChartVue>
    <tableChartVue id="chart29" :data="chartData.option24" :chartId="'option24'" :isMounted="chartOption29" :title="'违法原因'"
      :footer="'[数据来源：中国裁判文书网关键字“异宠”]'" :height="800" :width="60"></tableChartVue>
    <tableChartVue id="chart30" :data="chartData.option26" :chartId="'option26'" :isMounted="chartOption30" :title="'异宠被弃养或走失情况(节点可以拖动)'"
      :footer="'[数据来源：互联网人工搜集整合]'" :height="500" :width="80"></tableChartVue>

    <tableChartVue id="chart31" :data="chartData.option29" :chartId="'option29'" :isMounted="chartOption31" :title="'异宠弃养放生后果(点击图表获得信息)'"
      :footer="'[数据来源：互联网人工搜集整合]'" :height="500" :width="80" :isClick="true" @showchartdetailinfo="showChartDetailInfo"></tableChartVue>
    <div class="introduction-header-footer" id="weisheng">
      <div class="section-title">
        <div class="title-words">尾声</div>
        <div class="title-border"></div>
        <div class="explain-words">
          <span>客观、了解、包容、尊重</span>
        </div>

      </div>
    </div>
    <div class="words-content-container">
      <div class="opcity-container-words">
        <!-- <div class="fix-nail"></div> -->
        <div class="introduction-words">
          异宠市场的迅速崛起可能源于人类的猎奇心理，个性化心里的需求，养成的满足感或者来自于
          <span class="introduction-special-words">人类原始的征服欲望。饲养异宠的人可能希望花费较少的互动以及情感培养时间，通过类似单向的情感输出获得并不处于同等需要的陪伴和依赖感</span>。
          而异宠饲养揭开了人类与其他物种美好共处的遮羞布，血淋淋的真相便是<span class="introduction-special-words">鲜少有人会去真的热爱尊重，大多则是被名誉利益诱引</span>。
          褪去浮华后总会有这样一个问题：在金钱的驱使下会不会有更多的物种成为“异类”，成为人类驯化的宠物，成为人类身份的象征？此篇以异宠主画像、异宠市场的乱象、异宠饲养方式的优劣切入，
          重点关注<span class="introduction-special-words">人类在对异宠认知信息较为匮乏片面，智力有着极端优势的情况下，与异宠应该保持怎样的“饲养”关系</span>。<br>
          <div style="width: 100%;text-indent: 60px;">
            地球的年龄是46亿年，而人类文明不过300万年，我们依然在了解那剩余的漫长岁月中，
            其他生物的生命轨迹和生活习性。而作为当今最智慧的物种，我们目前能做的仅是去
            <span class="introduction-special-words">
            敦促异宠饲养以及异宠相关产业法律准则的完善；
            去包容合法异宠圈的存在，也包容部分人类对其的恐惧与厌恶；去不断了解，只有充分的了解，丰富的知识基础我们才能客观冷静，
            主动敞开爱意的双臂；去合理善待异宠、宠物、动物，尊重异宠主的热爱，更重要的是尊重异宠，尊重生命本身。
            </span>
          </div>
          <div style="width: 100%;text-indent: 60px;">
            人类社会应当是有规则的，不是随性而为，不是暴力、背叛、屠戮，我们要维护一条道德的底线，那条底线是对生命的尊重与敬畏，
            人类凭借独有的智慧与博爱不应成为矛盾的激化者，而应成为自然的调和者。
            <span class="introduction-special-words">我们所想的乌托邦世界是：宇宙中任何物种之间都不存在饲养关系，
              每一种动植物都能和谐自由地享受生命，真正的爱，是生命对生命的。即使通往乌托邦的道途漫长且终点不可及，但我们仍需努力地无限趋近于此。</span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer-container">
        <div><span>指导老师：</span> 伍晓芸</div>
        <div><span>编辑制作：</span> 赵晨彤 李鑫哲 王玥琪</div>
        <div><span>特别感谢：</span> 廖杰（网页制作指导）</div>
      </div>
      <div class="division"></div>
      <div class="reference">
        <ul>
          <li class="ref-title">参考文献：</li>
          <li>【1】《浅谈宠物行业存在的问题》</li>
          <li>【2】《狂野之心：异域宠物贸易的残酷现状》</li>
          <li>【3】《2017-2021年宠物行业白皮书》</li>
          <li>【4】《2017-2021年宠物医疗白皮书》</li>
          <li>【5】《艾瑞咨询：2021年中国宠物消费趋势白皮书》</li>
          <li>【6】《野生动物与异宠疾病学概论大纲》</li>
          <li>【7】《宠物领域新业态下的动物卫生监管问题》</li>
          <li>【8】《南都民调中心：宠物消费调查报告（2022）》</li>
          <li>【9】《都市“异宠族”—越奇怪越热爱》</li>
          <li>【10】《咖啡馆“异宠店员”上线》</li>
          <li>【11】《异宠兽医：“病宠”千奇百怪，治疗无分贵贱》</li>
          <li>部分数据来源互联网、公众号中国宠物行业观察、中国裁判文书网人工搜集整合</li>
          <li>照片来自网络，如有侵权联系 15536826902</li>
        </ul>
      </div>
    </div>
    <!-- 回到顶部 -->
    <el-backtop>
      <div style="{
          height: 100%;
          width: 100%;
          background-color: #33412c;
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(0,0,0, 0.12);
          text-align: center;
          line-height: 40px;
          color: #fff;
          font-size:20rpx;
        }">▲</div>
    </el-backtop>
    <el-dialog
      class="dialog-style"
      :visible.sync="dialogVisible"
      width="60%" :center="true" top="45vh">
      <span>{{dialogWords}}</span>
    </el-dialog>
    <el-dialog
      class="dialog-style"
      :visible.sync="dialogVisible2"
      width="60%" :center="true" top="30vh">
      <el-row :gutter="50">
        <el-col :span="12">
          <p>2020年包括猫狗宠物医疗花费</p>
          <p>200元以下：21.24%</p>
          <p>201-500元：32.79%</p>
          <p>501-1000元：27.94%</p>
          <p>1001-2000元：11.09%</p>
          <p>2001元及以上：6.93%</p>
        </el-col>
        <el-col :span="12">
          <p>2021年包括猫狗宠物医疗花费</p>
          <p>200元以下：5.38%</p>
          <p>201-500元：18.7%</p>
          <p>501-1000元：37.96%</p>
          <p>1001-2000元：25.59%</p>
          <p>2001元及以上：12.37%</p>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
  import option from './dataConfig/chart1.js'
  import tableChartVue from './components/tableChart.vue'
  import ChartEightTeenVue from './components/ChartEightTeen.vue'
  import ChartNineTeen from './components/ChartNineTeen.vue'
  // import ChartNightTeen from './components/ChartNightTeen.vue'
  // let scrollTop = 0
  // window.addEventListener('scroll', function (e) {
  //   scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  // })
  const mountArrFun = () => {
    const res = []
    for(let i = 1;i < 32;i++) {
      res.push(i)
    }
    return res
  }
  // const mountedChart = mountArrFun().mountedChart
  
  // const mountedChart = () => {
  //   let obj = {}
  //   for(let i = 0;i < 31;i++) {
  //     res.push(i)
  //   }
  // }
  export default {
    name: 'App',
    components: {
      tableChartVue,
      ChartEightTeenVue,
      ChartNineTeen
    },
    mounted() {
      window.addEventListener('scroll', this.windowScroll) //监听页面滚动
    },
    destroyed() {
      window.removeEventListener("scroll", this.windowScroll);//销毁滚动事件
    },
    data() {
      return {
        dialogVisible: false,
        dialogVisible2: false,
        dialogWords: '',
        mis: 'liaojie',
        value: '',
        fixedimageChoose: require('./assets/1.jpeg'),
        image1: require('./assets/1.jpeg'),
        image2: require('./assets/2.jpeg'),
        image3: require('./assets/3.jpeg'),
        countMounted: 1,
        chartOption1: false,
        chartOption2: false,
        chartOption3: false,
        chartOption4: false,
        chartOption5: false,
        chartOption6: false,
        chartOption7: false,
        chartOption8: false,
        chartOption9: false,
        chartOption10: false,
        chartOption11: false,
        chartOption12: false,
        chartOption13: false,
        chartOption14: false,
        chartOption15: false,
        chartOption16: false,
        chartOption17: false,
        chartOption18: false,
        chartOption19: false,
        chartOption20: false,
        chartOption21: false,
        chartOption22: false,
        chartOption23: false,
        chartOption24: false,
        chartOption25: false,
        chartOption26: false,
        chartOption27: false,
        chartOption28: false,
        chartOption29: false,
        chartOption30: false,
        chartOption31: false,
        isMoutedArr: mountArrFun(),
        // fixedimage: [require('./assets/BingWallPaper.jpg'), require('./assets/zhuomian2.jpeg')],
        // imageArr1:[
        //   require('./assets/imagefolder/division1/1.jpg'),
        //   require('./assets/imagefolder/division1/2.jpg'),
        //   require('./assets/imagefolder/division1/3.png'),
        //   require('./assets/imagefolder/division1/4.jpg')
        // ],
        // imageArr2: [
        //   require('./assets/imagefolder/division1/5.jpg'),
        //   require('./assets/imagefolder/division1/6.jpeg'),
        //   require('./assets/imagefolder/division1/8.jpeg'),
        //   require('./assets/imagefolder/division1/9.jpg')
        // ],
        // imageArr3: [
        //   require('./assets/imagefolder/division2/IMG_8839.jpg'),
        //   require('./assets/imagefolder/division2/IMG_8840.jpg'),
        //   require('./assets/imagefolder/division2/IMG_8842.jpg'),
        //   require('./assets/imagefolder/division2/IMG_8843.jpg'),
        // ],
        // imageArr4: [
        //   require('./assets/imagefolder/division2/IMG_8845.jpg'),
        //   require('./assets/imagefolder/division2/IMG_8847.jpg'),
        //   require('./assets/imagefolder/division2/IMG_8848.jpg'),
        //   require('./assets/imagefolder/division2/IMG_8849.jpeg')
        // ],
        // imageArr5: [
        //   require('./assets/imagefolder/division3/1.jpeg'),
        //   require('./assets/imagefolder/division3/2.jpeg'),
        //   require('./assets/imagefolder/division3/3.jpeg'),
        //   require('./assets/imagefolder/division3/4.jpeg')
        // ],
        // imageArr6: [
        //   require('./assets/imagefolder/division3/5.jpeg'),
        //   require('./assets/imagefolder/division3/6.jpeg'),
        //   require('./assets/imagefolder/division3/7.jpeg'),
        //   require('./assets/imagefolder/division3/8.jpeg')
        // ],
        chartData: option
      }
    },
    methods: {
      getMis() {
        console.log(this.mis)
        console.log("woshinibababa")
      },
      windowScroll() {
        // 获取视窗高度
        var domHight = document.body.offsetHeight
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        const yichongre = document.getElementById('yichongre')
        const kunjing = document.getElementById('kunjing')
        if(scrollTop < yichongre.offsetTop + domHight) {
          // console.log('执行2000')
          // this.mountedChart.option1 = true
          this.fixedimageChoose = this.image1
        } else if(scrollTop < kunjing.offsetTop + domHight + 50) {
          // console.log('fuzhi fuzhi')
          this.fixedimageChoose = this.image2
          // window.removeEventListener('scroll',)
        } else {
          this.fixedimageChoose = this.image3
        }
        // dom滚动位置
        // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // this.isMoutedArr.forEach((number, index) => {
        // })

        // 获取元素
        if (this.countMounted < 32) {
          const index = this.countMounted
          var ele = document.getElementById(`chart${index}`)
          // 获取监听元素本身高度
          var scrollHeight = ele.scrollHeight
          // 获取监听元素距离视窗顶部距离
          var offsetTop = ele.offsetTop
          // 获取监听元素距离顶部高度-窗口高度 
          var top = offsetTop - domHight / 2 > 0 ? offsetTop - domHight / 2 : 0
          // 元素距离底部的高度+元素本身高度
          var bottom = scrollHeight + offsetTop
          // 页面滚动位置 > 元素距离顶部高度-窗口高度 && 页面滚动位置 < 元素距离顶部高度+元素本身高度
          if(scrollTop >= top && scrollTop < bottom && this.countMounted <= 31) {
            this[`chartOption${index}`] = true
            this.countMounted += 1
          } 
        }
        
        // this.isMoutedArr = this.isMoutedArr.map((i) => {
          
        // }).filter(el => )
      },
      showChartDetailInfo (chartid) {
        if (chartid === 'option28') {
          this.dialogVisible2 = true
        }else if(chartid === 'option9') {
          this.dialogWords = '《刑法》第341条：非法猎捕、杀害国家重点保护的珍贵、濒危野生动物的，或者非法收购、运输、出售国家重点保护的珍贵、濒危野生动物及其制品的，处五年以下有期徒刑或者拘役，并处罚金；情节严重的，处五年以上十年以下有期徒刑，并处罚金；情节特别严重的，处十年以上有期徒刑，并处罚金或者没收财产。'
          this.dialogVisible = true
        }else {
          this.dialogWords = '《中华人民共和国新法修正案（十一）：违反国家规定，非法引进、释放或者丢弃外来入侵物种，情节严重的，处三年以下有期徒刑或者拘役，并处或者单处罚金。'
          this.dialogVisible = true
        }
        console.log(chartid)
      }
    }
  }
  </script>
<style lang="less" src="./css/App.less">

</style>
