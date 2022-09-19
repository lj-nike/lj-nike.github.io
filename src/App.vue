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
        <a href="#shangtong">互相伤害后的伤痛</a>
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
            从王校长的柯尔鸭、羊驼萌翻网友，到今天社交网站大火的暹罗鳄饲养日常，
            <span class="introduction-special-words">宠物经济疯狂, Z世代下的异宠热正急剧升温</span>, 人类已不止于弧化饲养猫狗, 而是在 “另类”宠
            物的饲养中寻找新的满足感。当一众人饲养异宠如痴如醉时，总会传来不解、讽刺甚至谩骂
            的声音。“因为爬宠很炫酷、养起来很简单他们的品种非常多样，更出于对这些动物的喜
            爱”
            “蛇和那些爬行动物的花纹难以接受，看见就会恶心”
            “这不就是些五毒四害”
            “冷血
            动物没有感情” “这些都是在野生动物饲养会有很大危害〞这些都是网民就异宠话题的讨
            论。喜爱异宠的人可能只有一个理由而庆恶它们的人可能有千万个理由。在异宠热的持续冲
            击下，应该接受还是抗拒，应该表达喜爱还是厌恶？面对这些疑问，
            <span class="introduction-special-words">此篇无意行走在“爱恨”恨”之间，而是把这些感受放到一边，先去了解，深刻的了解便是一切的基础。</span>
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
          <span class="introduction-special-words">一线城市以及新一线城市，</span>这表明异宠主仍是小众群体。
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
          <span class="introduction-special-words">仅有42位发布内容具有科普性，</span>
          数据表明有<span class="introduction-special-words">62.5%</span>的异宠、宠物博主布视频的真实目的为<span
            class="introduction-special-words">变现</span>。
          同时各大销售平台售卖异宠的价格在<span class="introduction-special-words">一元至百万元</span>之间并且没有对购买人群有年龄的限制与监督。网络传播有关异宠的内容鱼龙混杂，
          <span class="introduction-special-words">未成年人好奇心使然尚未对购买的宠物有详细的了解，47%</span>的异宠初次购买者几乎没有花时间研究所购买的动物，
          而我国仅有<span class="introduction-special-words">52%</span>的饲养者意识到自己饲养的是异宠。
          <span class="introduction-special-words">异宠主囿于人数劣势，相关信息少，被迫陷入了“孤岛”困境。</span>
        </div>
      </div>
    </div>

    <!-- 表格 -->
    <ChartNineTeen id="chart9" :isMounted="chartOption9" :title="'社交平台各宠物热度比例'"
      :footer="'[数据来源：《艾瑞咨询：2021年中国宠物消费趋势白皮书》]'" :height="500" :width="90"></ChartNineTeen>
    <tableChartVue id="chart10" :data="chartData.option21" :chartId="'option21'" :isMounted="chartOption10" :title="'视频内容主题观众感兴趣比例'"
      :footer="'[数据来源：《艾瑞咨询：2021年中国宠物消费趋势白皮书》]'" :height="500" :width="90"></tableChartVue>
    <tableChartVue id="chart11" :data="chartData.option23" :chartId="'option23'" :isMounted="chartOption11" :title="'微博萌宠红人做博主动机'"
      :footer="'[数据来源：《艾瑞咨询：2021年中国宠物消费趋势白皮书》]'" :height="400" :width="90"></tableChartVue>
    <tableChartVue id="chart12" :data="chartData.option20" :chartId="'option20'" :isMounted="chartOption12" :title="'知名博主粉丝数及点赞数'"
      :footer="'[数据来源：互联网人工搜集整合]'" :height="500" :width="90"></tableChartVue>
    <!-- 各类异宠b站视频播放量 -->
    <tableChartVue id="chart13" :data="chartData.option15" :chartId="'option15'" :isMounted="chartOption13" :title="'各类异宠b站视频播放量'"
      :footer="'[数据来源：互联网人工搜集整合]'" :height="500" :width="90"></tableChartVue>
    <tableChartVue id="chart14" :data="chartData.option25" :chartId="'option25'" :isMounted="chartOption14" :title="'销售平台各类异宠销售数据'"
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
          <span class="introduction-special-words">而再完备的环境设施，都不如生物之间的物竞天择，再准确的温湿度都抵不上大自然的调节。</span>
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
          《2021年宠物医疗行业白皮书》数据显示宠物
          <span class="introduction-special-words">总病例142624例，异宠已达到1673例</span>。异宠体型小，但喂养的食粮并不便宜，价格普遍在
          <span class="introduction-special-words">百元</span>，
          同时饲养环境要求严格，根据不同异宠的生活特性，主人需要严格把握异宠生活的温度湿度光照以及食量，
          而这些数字准确性需要时间的考量，其中大部分数据依旧<span class="introduction-special-words">未知</span>。就人工搜索
          <span class="introduction-special-words">29种</span>
          异宠而言，未知光照的有<span class="introduction-special-words">12种</span>。
          <span class="introduction-special-words">而再完备的环境设施，都不如生物之间的物竞天择，再准确的温湿度都抵不上大自然的调节。</span>
        </div>
      </div>
    </div>
    <!-- 不同级城市异宠医疗资源 -->
    <tableChartVue id="chart18" :data="chartData.option5" :chartId="'option5'" :isMounted="chartOption18" :title="'不同级城市异宠医疗资源'"
      :footer="'[数据来源：百度地图、宠物行业观察]'" :height="500" :width="90"></tableChartVue>
    <tableChartVue id="chart19" :data="chartData.option28" :chartId="'option28'" :isMounted="chartOption19" :title="'异宠就医遇到的问题'"
      :footer="'[数据来源：《南都民调：宠物消费调查报告（2022）》]'" :height="300" :width="60"></tableChartVue>
    <!-- 各类异宠常患病症 -->
    <tableChartVue id="chart20" :data="chartData.option10" :chartId="'option10'" :isMounted="chartOption20" :title="'各类异宠常患病症'"
      :footer="'[数据来源：《异宠兽医：“病宠”千奇百怪，治疗无分贵贱》]'" :height="500" :width="90"></tableChartVue>
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
          <span class="introduction-special-words">而再完备的环境设施，都不如生物之间的物竞天择，再准确的温湿度都抵不上大自然的调节。</span>
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
          异宠市场的迅速崛起可能源于人类的猎奇心理，个性化心里的需求，养成的满足感或者来自于
          <span class="introduction-special-words">人类原始的征服欲望</span>。
          而异宠饲养揭开了人类与其他物种美好共处的遮羞布，血淋淋的真相便是鲜少有人会去真的热爱尊重，大多则是被名誉利益诱引。
          褪去浮华后总会有这样一个问题：在金钱的驱使下会不会有更多的物种成为“异类”，成为人类驯化的宠物，成为人类身份的象征？<br>
          <div style="width: 100%;text-indent: 60px;">
            地球的年龄是46亿年，而人类文明不过300万年，在漫长的40多亿年中，一直有其他生灵生存于此，我们并不是主人只是地球的居客。
            作为当今最智慧的物种，我们目前能做的仅是去敦促异宠饲养相关法律准则的完善；去不断了解，只有充分的了解，
            丰富的知识基础我们才能客观冷静，主动敞开爱意的双臂；去包容合法的异宠圈的存在，也包容部分人类对其的恐惧与厌恶；
            去尊重异宠主的热爱，<span class="introduction-special-words">更重要的是尊重异宠，尊重生命本身</span>。。
          </div>
          <div style="width: 100%;text-indent: 60px;">
            人类社会应当是有规则的，不是随性而为，不是暴力、背叛、屠戮，我们要维护一条道德的底线，那条底线是对生命的尊重与敬畏。
            <span class="introduction-special-words">我们所想的乌托邦世界是：宇宙中任何物种之间都不存在饲养关系，每一种生物都能和谐自由地享受生命，
              真正的爱，是生命对生命的。即使道途漫长且不可到达，我们仍需努力地无限趋近于此</span>。
          </div>

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
          《2021年宠物医疗行业白皮书》数据显示宠物
          <span class="introduction-special-words">总病例142624例，异宠已达到1673例</span>。异宠体型小，但喂养的食粮并不便宜，价格普遍在
          <span class="introduction-special-words">百元</span>，
          同时饲养环境要求严格，根据不同异宠的生活特性，主人需要严格把握异宠生活的温度湿度光照以及食量，
          而这些数字准确性需要时间的考量，其中大部分数据依旧<span class="introduction-special-words">未知</span>。就人工搜索
          <span class="introduction-special-words">29种</span>
          异宠而言，未知光照的有<span class="introduction-special-words">12种</span>。
          <span class="introduction-special-words">而再完备的环境设施，都不如生物之间的物竞天择，再准确的温湿度都抵不上大自然的调节。</span>
        </div>
      </div>
    </div>
    <!-- 非法售卖走私野生异宠 -->
    <tableChartVue id="chart28" :data="chartData.option9" :chartId="'option9'" :isMounted="chartOption28" :title="'非法售卖走私野生异宠(点击查看详情)'"
      :footer="'[数据来源：中国裁判文书网关键字“异宠”]'" :height="500" :width="90"></tableChartVue>
    <tableChartVue id="chart29" :data="chartData.option24" :chartId="'option24'" :isMounted="chartOption29" :title="'违法原因'"
      :footer="'[数据来源：中国裁判文书网关键字“异宠”]'" :height="800" :width="60"></tableChartVue>
    <tableChartVue id="chart30" :data="chartData.option26" :chartId="'option26'" :isMounted="chartOption30" :title="'异宠被弃养或走失情况(节点可以拖动)'"
      :footer="'[数据来源：互联网人工搜集整合]'" :height="500" :width="80"></tableChartVue>

    <tableChartVue id="chart31" :data="chartData.option29" :chartId="'option29'" :isMounted="chartOption31" :title="'异宠弃养放生后果'"
      :footer="'[数据来源：互联网人工搜集整合]'" :height="500" :width="80"></tableChartVue>
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
          <span class="introduction-special-words">人类原始的征服欲望</span>。
          而异宠饲养揭开了人类与其他物种美好共处的遮羞布，血淋淋的真相便是鲜少有人会去真的热爱尊重，大多则是被名誉利益诱引。
          褪去浮华后总会有这样一个问题：在金钱的驱使下会不会有更多的物种成为“异类”，成为人类驯化的宠物，成为人类身份的象征？<br>
          <div style="width: 100%;text-indent: 60px;">
            地球的年龄是46亿年，而人类文明不过300万年，在漫长的40多亿年中，一直有其他生灵生存于此，我们并不是主人只是地球的居客。
            作为当今最智慧的物种，我们目前能做的仅是去敦促异宠饲养相关法律准则的完善；去不断了解，只有充分的了解，
            丰富的知识基础我们才能客观冷静，主动敞开爱意的双臂；去包容合法的异宠圈的存在，也包容部分人类对其的恐惧与厌恶；
            去尊重异宠主的热爱，<span class="introduction-special-words">更重要的是尊重异宠，尊重生命本身</span>。
          </div>
          <div style="width: 100%;text-indent: 60px;">
            人类社会应当是有规则的，不是随性而为，不是暴力、背叛、屠戮，我们要维护一条道德的底线，那条底线是对生命的尊重与敬畏。
            <span class="introduction-special-words">我们所想的乌托邦世界是：宇宙中任何物种之间都不存在饲养关系，每一种生物都能和谐自由地享受生命，
              真正的爱，是生命对生命的。即使道途漫长且不可到达，我们仍需努力地无限趋近于此</span>。
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
          <li>【2】《狂野之心：异于宠物贸易的残酷现状》</li>
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
    }
  }
  </script>
<style lang="less" src="./css/App.less">

</style>
