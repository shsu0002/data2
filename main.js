// ── Journey stops + interactivity ──

const STOPS = [
  {
    id: 'boxhill',
    name: 'Box Hill',
    tagline: 'The heart of Chinese Melbourne',
    region: 'region-boxhill',
    remyLeft: '60.8%', remyTop: '26.4%',
    pop: '14,353', pct: '53.6%',
    bars: [
      {country:'China',     pct:29.5, color:'#1d7a68'},
      {country:'Malaysia',  pct:6.4,  color:'#c94030'},
      {country:'India',     pct:4.5,  color:'#7f6ab8'},
      {country:'Hong Kong', pct:2.5,  color:'#b87c2a'},
      {country:'Vietnam',   pct:1.9,  color:'#378add'},
    ],
    rest: '58', chart2Type:'lollipop',
    chart2Data:[
      {label:'Chinese',   val:36, color:'#1d7a68'},
      {label:'Japanese',  val:8,  color:'#e8863a'},
      {label:'Korean',    val:5,  color:'#c94030'},
      {label:'Malaysian', val:4,  color:'#b87c2a'},
      {label:'Vietnamese',val:3,  color:'#378add'},
      {label:'Other',     val:2,  color:'#888780'},
    ],
    chart2Title:'Asian restaurants in Box Hill by cuisine',
    foods: ['Cantonese','Dim sum','Hot pot','Bubble tea','BBQ'],
    story: 'Box Hill\'s main street is unmistakable — the signage is bilingual, the food courts multilevel, and 46% of residents have Chinese ancestry. With the highest concentration of Chinese-born residents anywhere in Melbourne, it\'s earned its place as the city\'s unofficial Chinatown.'
  },
  {
    id: 'glen',
    name: 'Glen Waverley',
    tagline: 'Where east Asia meets South Asia',
    region: 'region-glen',
    remyLeft: '65.0%', remyTop: '48.4%',
    pop: '42,642', pct: '47.9%',
    bars: [
      {country:'China',     pct:17.8, color:'#1d7a68'},
      {country:'India',     pct:8.0,  color:'#7f6ab8'},
      {country:'Malaysia',  pct:5.6,  color:'#c94030'},
      {country:'Sri Lanka', pct:5.3,  color:'#e8863a'},
      {country:'Hong Kong', pct:2.5,  color:'#b87c2a'},
    ],
    rest: '24', chart2Type:'lollipop',
    chart2Data:[
      {label:'Chinese',   val:8,  color:'#1d7a68'},
      {label:'Indian',    val:6,  color:'#7f6ab8'},
      {label:'Japanese',  val:4,  color:'#e8863a'},
      {label:'Malaysian', val:3,  color:'#b87c2a'},
      {label:'Sri Lankan',val:2,  color:'#c94030'},
      {label:'Other',     val:1,  color:'#888780'},
    ],
    chart2Title:'Asian restaurants in Glen Waverley by cuisine',
    foods: ['Chinese','Indian','Malaysian','Sri Lankan','Ramen'],
    story: 'Glen Waverley is Melbourne\'s most populous Asian-majority suburb. The mix here is more diverse than Box Hill — alongside a strong Chinese community, Indian and Sri Lankan families have built a parallel food scene of curry houses, dosa spots, and South Asian sweet shops.'
  },
  {
    id: 'springvale',
    name: 'Springvale',
    tagline: 'Melbourne\'s Vietnamese heartland',
    region: 'region-springvale',
    remyLeft: '53.8%', remyTop: '66.0%',
    pop: '22,174', pct: '56.4%',
    bars: [
      {country:'Vietnam',  pct:20.9, color:'#378add'},
      {country:'India',    pct:7.4,  color:'#7f6ab8'},
      {country:'Cambodia', pct:5.6,  color:'#e8a030'},
      {country:'China',    pct:5.3,  color:'#1d7a68'},
      {country:'Malaysia', pct:4.6,  color:'#c94030'},
    ],
    rest: '34', chart2Type:'lollipop',
    chart2Data:[
      {label:'Vietnamese',val:18, color:'#378add'},
      {label:'Chinese',   val:5,  color:'#1d7a68'},
      {label:'Cambodian', val:4,  color:'#e8a030'},
      {label:'Malaysian', val:3,  color:'#c94030'},
      {label:'Indian',    val:2,  color:'#7f6ab8'},
      {label:'Other',     val:2,  color:'#888780'},
    ],
    chart2Title:'Asian restaurants in Springvale by cuisine',
    foods: ['Phở','Bánh mì','Vietnamese BBQ','Cambodian','Dim sum'],
    story: 'The most Asian-born suburb in Melbourne. Springvale\'s Little Saigon is a sensory overload — pho steam, roast duck hanging in windows, and the smell of bánh mì. The Vietnamese community, many arrived as refugees in the late 1970s and 80s, built this place from scratch.'
  },
  {
    id: 'cbd',
    name: 'Melbourne CBD',
    tagline: 'All roads lead to the city',
    region: 'region-cbd',
    remyLeft: '30.3%', remyTop: '31.4%',
    pop: '54,941', pct: '48.3%',
    bars: [
      {country:'China',    pct:15.1, color:'#1d7a68'},
      {country:'India',    pct:7.0,  color:'#7f6ab8'},
      {country:'Malaysia', pct:6.2,  color:'#c94030'},
      {country:'Vietnam',  pct:2.1,  color:'#378add'},
      {country:'Korea',    pct:2.2,  color:'#e8863a'},
    ],
    rest: '442', chart2Type:'lollipop',
    chart2Data:[
      {label:'Japanese',  val:129, color:'#e8863a'},
      {label:'Chinese',   val:114, color:'#1d7a68'},
      {label:'Korean',    val:38,  color:'#c94030'},
      {label:'Indian',    val:37,  color:'#7f6ab8'},
      {label:'Thai',      val:33,  color:'#b87c2a'},
      {label:'Vietnamese',val:30,  color:'#378add'},
    ],
    chart2Title:'Asian restaurants in Melbourne CBD by cuisine',
    foods: ['Everything','Ramen','Korean BBQ','Dumplings','Laksa'],
    story: 'The CBD is the final destination — and the great mixing bowl. Nearly half its residents were born in Asia, and its restaurants reflect every stop on this journey: the Cantonese yum cha of Box Hill, the phở of Springvale, the curry of Glen Waverley, all within a few city blocks.'
  }
];

let current = -1;

function buildTrail() {
  const t = document.getElementById('trail');
  STOPS.forEach((s,i) => {
    const stop = document.createElement('div');
    stop.className = 'trail-stop';
    stop.id = 'trail-'+i;
    stop.innerHTML = `<div class="trail-dot">${i+1}</div><div class="trail-name">${s.name}</div>`;
    stop.onclick = () => goToStop(i);
    t.appendChild(stop);
    if(i < STOPS.length-1) {
      const line = document.createElement('div');
      line.className = 'trail-line';
      line.id = 'trail-line-'+i;
      t.appendChild(line);
    }
  });
}

function updateTrail(idx) {
  STOPS.forEach((_,i) => {
    const el = document.getElementById('trail-'+i);
    el.className = 'trail-stop' + (i===idx?' active':i<idx?' done':'');
    if(i < STOPS.length-1) {
      const line = document.getElementById('trail-line-'+i);
      line.className = 'trail-line' + (i<idx?' done':'');
    }
  });
}

function highlightRegion(stopIdx) {
  document.querySelectorAll('.suburb-region').forEach(r => {
    r.style.fill = '#e8e0d4';
    r.style.stroke = '#c8b8a8';
    r.style.strokeWidth = '1.5';
  });
  if(stopIdx >= 0) {
    const reg = document.getElementById(STOPS[stopIdx].region);
    if(reg) {
      reg.style.fill = '#fde8e5';
      reg.style.stroke = '#c94030';
      reg.style.strokeWidth = '2.5';
    }
  }
}

function moveRemy(stopIdx) {
  const remy = document.getElementById('remy-marker');
  const s = STOPS[stopIdx];
  remy.style.left = s.remyLeft;
  remy.style.top  = s.remyTop;
  remy.classList.remove('walking');
  void remy.offsetWidth;
  remy.classList.add('walking');
}

function renderBars(bars) {
  const el = document.getElementById('pop-bars'); if(!el) return;
  const maxPct = Math.max(...bars.map(b=>b.pct));
  el.innerHTML = bars.map(b => `
    <div class="pop-bar-row">
      <div class="pop-bar-label">${b.country}</div>
      <div class="pop-bar-track">
        <div class="pop-bar-fill" style="width:0%;background:${b.color}" data-target="${Math.round(b.pct/maxPct*100)}"></div>
      </div>
      <div class="pop-bar-pct">${b.pct}%</div>
    </div>`).join('');
  setTimeout(() => {
    el.querySelectorAll('.pop-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.target + '%';
    });
  }, 50);
}

function renderFoods(foods) {
  var el = document.getElementById('food-badges');
  if(!el) return;
  el.innerHTML = foods.map(f=>`<span class="food-badge">${f}</span>`).join('');
}

function goToStop(idx) {
  current = idx;
  const s = STOPS[idx];
  updateTrail(idx);
  highlightRegion(idx);
  moveRemy(idx);

  document.getElementById('overview-note').style.display = 'none';

  const card = document.getElementById('stop-card');
  card.classList.remove('visible');
  var strip = document.getElementById('story-strip');
  if(strip) strip.style.display = 'block';
  setTimeout(()=>{ card.classList.add('visible'); }, 50);

  function setText(id, val){ var el=document.getElementById(id); if(el) el.textContent=val; }
  setText('card-eyebrow', `Stop ${idx+1} of ${STOPS.length}`);
  setText('card-title',   s.name);
  setText('card-tagline', s.tagline);
  setText('stat-pop',     s.pop);
  setText('stat-pct',     s.pct);
  setText('stop-story',   s.story);
  if(s.rest) setText('stat-rest', s.rest);
  renderChart2(s);
  renderBars(s.bars);
  renderFoods(s.foods);

  var bprev = document.getElementById('btn-prev');
  var bnext = document.getElementById('btn-next');
  var slabel = document.getElementById('step-label');
  var isLast = idx === STOPS.length - 1;
  if(bprev)  bprev.disabled = (idx === 0);
  if(bnext)  { bnext.textContent = isLast ? 'Journey complete!' : 'Next stop →'; bnext.disabled = isLast; }
  if(slabel) slabel.textContent = `${idx+1} / ${STOPS.length}`;
}

function nextStop() {
  if(current < STOPS.length-1) goToStop(current+1);
}
function prevStop() {
  if(current > 0) goToStop(current-1);
}


function renderChart2(stop){
  var container = document.getElementById('chart2-content'); if(!container) return;
  var ct = document.getElementById('chart2-title'); if(ct) ct.textContent = stop.chart2Title || '';
  container.innerHTML = '';
  if(!stop.chart2Type) return;
  if(stop.chart2Type === 'hbar') renderHBar(stop.chart2Data, container);
  if(stop.chart2Type === 'donut')     renderDonut(stop.chart2Data, container);
  if(stop.chart2Type === 'lollipop')  renderLollipop(stop.chart2Data, container);
  if(stop.chart2Type === 'grouped')   renderGrouped(stop.chart2Data, container);
  if(stop.chart2Type === 'radial')    renderRadial(stop.chart2Data, container);
  if(stop.chart2Type === 'sparkgrid') renderSparkGrid(stop.chart2Data, container);
}

function renderHBar(data, el){
  var max = Math.max.apply(null, data.map(function(d){return d.val;}));
  var html = '';
  data.forEach(function(d){
    var w = Math.round(d.val / max * 100);
    html += '<div class="pop-bar-row">' +
      '<div class="pop-bar-label" style="color:var(--ink-mid)">' + d.label + '</div>' +
      '<div class="pop-bar-track">' +
        '<div class="pop-bar-fill" style="width:0%;background:' + d.color + '" data-target="' + w + '"></div>' +
      '</div>' +
      '<div class="pop-bar-pct" style="color:' + d.color + ';font-weight:500">' + d.val + '</div>' +
      '</div>';
  });
  el.innerHTML = html;
  setTimeout(function(){
    el.querySelectorAll('.pop-bar-fill').forEach(function(bar){
      bar.style.width = bar.dataset.target + '%';
    });
  }, 50);
}

function renderDonut(data, el){
  var r=40,cx=46,cy=46,sw=12,circ=2*Math.PI*r;
  var arc=circ*(data.asian/100);
  el.innerHTML='<div class="donut-wrap"><svg width="92" height="92" viewBox="0 0 92 92">'+
    '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="#e8e0d4" stroke-width="'+sw+'"/>'+
    '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="#c94030" stroke-width="'+sw+'"'+
    ' stroke-dasharray="'+arc+' '+circ+'" stroke-dashoffset="'+(circ/4)+'" style="transition:stroke-dasharray 0.8s ease"/>'+
    '<text x="'+cx+'" y="'+(cy-3)+'" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="700" fill="#1a1714">'+data.asian+'%</text>'+
    '<text x="'+cx+'" y="'+(cy+10)+'" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7" fill="#8a837a">Asian-born</text>'+
    '</svg>'+
    '<div class="donut-legend">'+
    '<div class="donut-legend-item"><div class="donut-swatch" style="background:#c94030"></div>Asian-born: '+data.asian+'%</div>'+
    '<div class="donut-legend-item"><div class="donut-swatch" style="background:#e8e0d4"></div>Other: '+data.nonAsian+'%</div>'+
    '</div></div>';
}

function renderLollipop(data, el){
  var max=Math.max.apply(null,data.map(function(d){return d.val;}));
  var html='';
  data.forEach(function(d){
    var w=Math.round(d.val/max*100);
    html+='<div class="lollipop-row">'+
      '<div class="lollipop-label"'+(d.highlight?' style="color:var(--red);font-weight:500"':'')+'>'+d.label+'</div>'+
      '<div class="lollipop-track">'+
      '<div class="lollipop-line" style="width:0%;background:'+d.color+'" data-w="'+w+'"></div>'+
      '<div class="lollipop-dot" style="left:0%;background:'+d.color+';border:2px solid white;box-shadow:0 0 0 2px '+d.color+'22" data-w="'+w+'"></div>'+
      '</div>'+
      '<div class="lollipop-val"'+(d.highlight?' style="color:'+d.color+';font-weight:600"':' style="color:var(--ink-muted)"')+'>'+d.val+'</div>'+
      '</div>';
  });
  el.innerHTML=html;
  setTimeout(function(){
    el.querySelectorAll('.lollipop-line').forEach(function(e){e.style.width=e.dataset.w+'%';});
    el.querySelectorAll('.lollipop-dot').forEach(function(e){e.style.left=e.dataset.w+'%';});
  },60);
}

function renderGrouped(data, el){
  var maxVal=7571;
  var ec='#1d7a68',sc='#7f6ab8';
  var rows='';
  data.eastAsia.forEach(function(e,i){
    var s=data.southAsia[i];
    var ew=Math.round(e.val/maxVal*100);
    var sw=Math.round(s.val/maxVal*100);
    rows+='<div class="grouped-bar-group">'+
      '<div class="grouped-bar-glabel">'+e.label+' / '+s.label+'</div>'+
      '<div class="grouped-bar-pair"><div class="grouped-bar-mini" style="width:0%;background:'+ec+'" data-w="'+ew+'"></div><span style="font-size:0.6rem;color:var(--ink-muted);margin-left:3px">'+e.val.toLocaleString()+'</span></div>'+
      '<div class="grouped-bar-pair"><div class="grouped-bar-mini" style="width:0%;background:'+sc+'" data-w="'+sw+'"></div><span style="font-size:0.6rem;color:var(--ink-muted);margin-left:3px">'+s.val.toLocaleString()+'</span></div>'+
      '</div>';
  });
  el.innerHTML='<div class="grouped-bar-legend">'+
    '<div class="donut-legend-item"><div class="donut-swatch" style="background:'+ec+'"></div>East/SE Asian</div>'+
    '<div class="donut-legend-item"><div class="donut-swatch" style="background:'+sc+'"></div>South Asian</div>'+
    '</div><div class="grouped-bar-wrap">'+rows+'</div>';
  setTimeout(function(){
    el.querySelectorAll('.grouped-bar-mini').forEach(function(e){e.style.width=e.dataset.w+'%';});
  },60);
}

function renderRadial(data, el){
  var sz=50;
  var items=data.map(function(d){
    var pct=d.val/d.max;
    var r=18,cx=sz/2,cy=sz/2,circ=2*Math.PI*r,arc=circ*pct;
    return '<div class="radial-item">'+
      '<svg width="'+sz+'" height="'+sz+'" viewBox="0 0 '+sz+' '+sz+'">'+
      '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="#e8e0d4" stroke-width="6"/>'+
      '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="'+d.color+'" stroke-width="6"'+
      ' stroke-dasharray="'+arc+' '+circ+'" stroke-dashoffset="'+(circ/4)+'" style="transition:stroke-dasharray 0.7s ease"/>'+
      '<text x="'+cx+'" y="'+(cy+4)+'" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7" font-weight="500" fill="#1a1714">'+(d.val/1000).toFixed(1)+'k</text>'+
      '</svg>'+
      '<div class="radial-label" style="color:'+d.color+';font-weight:500">'+d.label+'</div>'+
      '</div>';
  }).join('');
  el.innerHTML='<div class="radial-wrap">'+items+'</div>';
}

function renderSparkGrid(data, el){
  var cards=data.map(function(d){
    var mx=Math.max.apply(null,d.spark);
    var bars=d.spark.map(function(v,i){
      var h=Math.round(v/mx*32);
      var op=(0.4+0.6*(i/(d.spark.length-1))).toFixed(2);
      return '<div class="spark-bar" style="height:'+h+'px;background:'+d.color+';opacity:'+op+';flex:1"></div>';
    }).join('');
    return '<div class="spark-card">'+
      '<div class="spark-title">'+d.label+'</div>'+
      '<div class="spark-bars">'+bars+'</div>'+
      '<div class="spark-num" style="color:'+d.color+'">'+d.val+'</div>'+
      '</div>';
  }).join('');
  el.innerHTML='<div class="spark-grid">'+cards+'</div>';
}

buildTrail();


// ── Typewriter animation ──

(function(){
  var line1 = `“Bonjour! I’m Remy.”`;
  var line2 = `I’ve sniffed out something extraordinary about this city — follow me and I’ll show you how migration shaped the way Melbourne eats.`;
  var el1 = document.getElementById('typewriter-line1');
  var el2 = document.getElementById('typewriter-line2');
  if(!el1 || !el2) return;
  var i = 0, j = 0;
  // Start typing line1 after remy drop animation (~1.1s)
  setTimeout(function(){
    var t1 = setInterval(function(){
      if(i < line1.length){
        el1.textContent += line1[i++];
      } else {
        clearInterval(t1);
        // Start line2 after short pause
        setTimeout(function(){
          var t2 = setInterval(function(){
            if(j < line2.length){
              el2.textContent += line2[j++];
            } else {
              clearInterval(t2);
            }
          }, 18);
        }, 300);
      }
    }, 45);
  }, 1100);
})();


// ── Vega-Lite charts ──

const BASE = 'https://raw.githubusercontent.com/shsu0002/data2/main/files/';

const COLORS = {
  red:  '#c94030', teal: '#1d7a68', gold: '#b87c2a',
  blue: '#378add', purple: '#7f6ab8', orange: '#e8863a',
  muted: '#d3d1c7', paper: '#f2ede5'
};

// Vega-Lite shared config
const CONFIG = {
  font: 'DM Sans',
  background: 'transparent',
  view: {stroke: null},
  axis: {
    labelFont: 'DM Sans', titleFont: 'DM Sans',
    labelColor: '#8a837a', titleColor: '#4a4540',
    gridColor: '#e8e0d4', domainColor: '#d3d1c7',
    labelFontSize: 11, titleFontSize: 11
  },
  legend: {
    labelFont: 'DM Sans', titleFont: 'DM Sans',
    labelColor: '#4a4540', titleColor: '#8a837a',
    labelFontSize: 11
  }
};

// ── Chart 3: Horizontal bar — top suburbs ──
vegaEmbed('#chart-bar-suburbs', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {url: BASE + '01_suburb_asian_pct.json'},
  config: CONFIG,
  width: 'container', height: 320,
  transform: [
    {filter: 'datum.pct_asian > 0'},
    {window: [{op:'rank', as:'rank'}], sort:[{field:'pct_asian', order:'descending'}]},
    {filter: 'datum.rank <= 15'}
  ],
  mark: {type:'bar', cornerRadiusEnd:3, color: COLORS.teal},
  encoding: {
    y: {field:'suburb', type:'nominal', sort:'-x', axis:{labelLimit:120, title:null}},
    x: {field:'pct_asian', type:'quantitative', title:'Asian-born (%)', axis:{format:'.0f', tickCount:5}},
    color: {field:'pct_asian', type:'quantitative', scale:{range:['#9fe1cb','#1d7a68']}, legend:null},
    tooltip: [{field:'suburb',title:'Suburb'},{field:'pct_asian',title:'Asian-born %',format:'.1f'},{field:'total_pop',title:'Population',format:','}]
  }
}, {actions:false});

// ── Chart 2: Donut — cuisine breakdown ──
vegaEmbed('#chart-donut', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {url: BASE + '03_cuisine_breakdown.json'},
  config: CONFIG,
  width: 220, height: 220,
  layer: [
    {
      mark: {type:'arc', innerRadius:60, outerRadius:105, padAngle:0.02, cornerRadius:3},
      encoding: {
        theta: {field:'count', type:'quantitative'},
        color: {field:'cuisine', type:'nominal',
          scale:{range:['#1d7a68','#c94030','#7f6ab8','#b87c2a','#378add','#e8863a','#d4537e','#485860']},
          legend:{orient:'right', title:null}},
        tooltip: [{field:'cuisine',title:'Cuisine'},{field:'count',title:'Restaurants'},{field:'pct',title:'Share %',format:'.1f'}]
      }
    }
  ]
}, {actions:false});

// ── Chart 5: Scatter — pop vs restaurants ──
vegaEmbed('#chart-scatter', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {url: BASE + '04_scatter_pop_vs_restaurant.json'},
  config: CONFIG,
  width: 'container', height: 280,
  layer: [
    {
      mark: {type:'line', strokeDash:[4,3], color: COLORS.muted},
      transform: [{regression:'pct_asian_restaurants', on:'pct_asian_pop'}],
      encoding: {
        x: {field:'pct_asian_pop', type:'quantitative'},
        y: {field:'pct_asian_restaurants', type:'quantitative'}
      }
    },
    {
      mark: {type:'point', filled:true, size:80, opacity:0.85},
      encoding: {
        x: {field:'pct_asian_pop', type:'quantitative', title:'Asian-born population (%)', axis:{format:'.0f'}},
        y: {field:'pct_asian_restaurants', type:'quantitative', title:'Asian restaurants (%)', axis:{format:'.0f'}},
        color: {value: COLORS.teal},
        tooltip: [
          {field:'suburb',title:'Suburb'},
          {field:'pct_asian_pop',title:'Asian-born %',format:'.1f'},
          {field:'pct_asian_restaurants',title:'Asian restaurants %',format:'.1f'},
          {field:'total_restaurants',title:'Total restaurants'}
        ]
      }
    },
    {
      mark: {type:'text', dy:-10, fontSize:10, color:'#4a4540'},
      encoding: {
        x: {field:'pct_asian_pop', type:'quantitative'},
        y: {field:'pct_asian_restaurants', type:'quantitative'},
        text: {field:'suburb'}
      }
    }
  ]
}, {actions:false});

// ── Chart 6: Heatmap ──
vegaEmbed('#chart-heatmap', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {url: BASE + '10_cuisine_by_cluster.json'},
  config: CONFIG,
  width: 'container', height: 280,
  mark: {type:'rect', cornerRadius:2},
  encoding: {
    x: {field:'cluster', type:'nominal', title:null, axis:{labelAngle:-30, labelLimit:80}},
    y: {field:'cuisine', type:'nominal', title:null},
    color: {field:'count', type:'quantitative',
      scale:{scheme:'greens'},
      legend:{title:'Restaurants', gradientLength:100}},
    tooltip: [{field:'cluster',title:'Suburb'},{field:'cuisine',title:'Cuisine'},{field:'count',title:'Restaurants'}]
  }
}, {actions:false});

// ── Chart 9: Line — total CBD restaurants ──
vegaEmbed('#chart-line-total', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {url: BASE + '05_clue_yearly_trend.json'},
  config: CONFIG,
  width: 'container', height: 200,
  layer: [
    {
      mark: {type:'area', opacity:0.08, color: COLORS.red},
      encoding: {
        x: {field:'year', type:'quantitative', title:null, axis:{format:'d', tickCount:6}},
        y: {field:'restaurant_count', type:'quantitative', title:'Restaurants'}
      }
    },
    {
      mark: {type:'line', color: COLORS.red, strokeWidth:2},
      encoding: {
        x: {field:'year', type:'quantitative'},
        y: {field:'restaurant_count', type:'quantitative'},
        tooltip: [{field:'year',title:'Year'},{field:'restaurant_count',title:'Restaurants'},{field:'total_seats',title:'Seats',format:','}]
      }
    }
  ]
}, {actions:false});

// ── Chart 10: Dual line — Asian vs Other ──
vegaEmbed('#chart-line-asian', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {url: BASE + '07_clue_asian_trend.json'},
  config: CONFIG,
  width: 'container', height: 200,
  mark: {type:'line', strokeWidth:2},
  encoding: {
    x: {field:'year', type:'quantitative', title:null, axis:{format:'d', tickCount:6}},
    y: {field:'count', type:'quantitative', title:'Restaurants'},
    color: {field:'type', type:'nominal',
      scale:{domain:['Asian-identified','Other'], range:[COLORS.teal, COLORS.muted]},
      legend:{title:null}},
    tooltip: [{field:'year',title:'Year'},{field:'type',title:'Type'},{field:'count',title:'Count'}]
  }
}, {actions:false});

// ── Chart 11: Stacked area — seats ──
vegaEmbed('#chart-area-seats', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {url: BASE + '09_clue_seats_trend.json'},
  config: CONFIG,
  width: 'container', height: 200,
  mark: {type:'area', opacity:0.8},
  encoding: {
    x: {field:'year', type:'quantitative', title:null, axis:{format:'d', tickCount:6}},
    y: {field:'total_seats', type:'quantitative', stack:'zero', title:'Seats'},
    color: {field:'seating_type', type:'nominal',
      scale:{domain:['Seats - Indoor','Seats - Outdoor'], range:[COLORS.blue, COLORS.gold]},
      legend:{title:null, labelExpr:"datum.label == 'Seats - Indoor' ? 'Indoor' : 'Outdoor'"}},
    tooltip: [{field:'year',title:'Year'},{field:'seating_type',title:'Type'},{field:'total_seats',title:'Seats',format:','}]
  }
}, {actions:false});

// ── Chart 12: Multi-line — sub-areas ──
vegaEmbed('#chart-multiline', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {url: BASE + '06_clue_area_trend.json'},
  config: CONFIG,
  width: 'container', height: 240,
  transform: [
    {filter: "datum.area != 'Unincorporated CBD'"},
    {filter: "datum.count > 0"}
  ],
  mark: {type:'line', strokeWidth:1.8, point:{filled:true, size:20, opacity:0.7}},
  encoding: {
    x: {field:'year', type:'quantitative', title:null, axis:{format:'d', tickCount:6}},
    y: {field:'count', type:'quantitative', title:'Restaurants'},
    color: {field:'area', type:'nominal',
      scale:{scheme:'tableau10'},
      legend:{title:null, columns:2}},
    tooltip: [{field:'year',title:'Year'},{field:'area',title:'Area'},{field:'count',title:'Restaurants'}]
  }
}, {actions:false});
