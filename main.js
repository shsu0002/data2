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
  renderStopMap(s, idx);

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
  if(stop.chart2Type === 'lollipop')  renderLollipop(stop.chart2Data, container);
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

buildTrail();

// ── Typewriter animation ──
(function(){
  var line1 = `"Bonjour! I'm Remy."`;
  var line2 = `I've sniffed out something extraordinary about this city — follow me and I'll show you how migration shaped the way Melbourne eats.`;
  var el1 = document.getElementById('typewriter-line1');
  var el2 = document.getElementById('typewriter-line2');
  if(!el1 || !el2) return;
  var i = 0, j = 0;
  setTimeout(function(){
    var t1 = setInterval(function(){
      if(i < line1.length){ el1.textContent += line1[i++]; }
      else {
        clearInterval(t1);
        setTimeout(function(){
          var t2 = setInterval(function(){
            if(j < line2.length){ el2.textContent += line2[j++]; }
            else { clearInterval(t2); }
          }, 18);
        }, 300);
      }
    }, 45);
  }, 1100);
})();

// ── Per-stop restaurant map ──
var _stopMap = null;
var _stopMarkersLayer = null;

function renderStopMap(stop, idx) {
  var el = document.getElementById('stop-map');
  if (!el) return;

  var centers = {
    'boxhill':    [-37.8196, 145.1214],
    'glen':       [-37.8797, 145.1647],
    'springvale': [-37.9497, 145.1513],
    'cbd':        [-37.8136, 144.9631]
  };
  var zoom = {'cbd': 14, 'boxhill': 14, 'glen': 14, 'springvale': 14};
  var radius = {'cbd': 0.025, 'boxhill': 0.035, 'glen': 0.035, 'springvale': 0.035};

  var center = centers[stop.id] || [-37.85, 145.05];

  var CUISINE_COLORS = {
    'Chinese':'#1d7a68','Japanese':'#e8863a','Vietnamese':'#378add',
    'Indian':'#7f6ab8','Korean':'#c94030','Malaysian':'#b87c2a',
    'Thai':'#d4537e','Other Asian':'#888780','Asian (general)':'#888780',
    'Sri Lankan':'#e8863a','Cambodian':'#e8a030','Taiwanese':'#1d7a68',
    'Indonesian':'#888780','Nepalese':'#7f6ab8','Burmese':'#888780','Noodle':'#888780'
  };

  if (!_stopMap) {
    _stopMap = L.map('stop-map', {zoomControl:true, scrollWheelZoom:false});
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution:'© OpenStreetMap © CARTO', subdomains:'abcd', maxZoom:19
    }).addTo(_stopMap);
    _stopMarkersLayer = L.layerGroup().addTo(_stopMap);
  }

  _stopMarkersLayer.clearLayers();
  _stopMap.setView(center, zoom[stop.id] || 14);

  var r = radius[stop.id] || 0.035;
  fetch('https://raw.githubusercontent.com/shsu0002/data2/main/files/02_asian_restaurant_points.json')
    .then(function(res){ return res.json(); })
    .then(function(data){
      var nearby = data.filter(function(d){
        return Math.abs(d.lat - center[0]) < r && Math.abs(d.lon - center[1]) < r;
      });
      nearby.forEach(function(d){
        var color = CUISINE_COLORS[d.cuisine_label] || '#888780';
        L.circleMarker([d.lat, d.lon], {
          radius:6, fillColor:color, color:'white',
          weight:1, fillOpacity:0.85
        }).bindTooltip(d.name + '<br><em>' + d.cuisine_label + '</em>', {direction:'top'})
          .addTo(_stopMarkersLayer);
      });
      var lbl = document.getElementById('stop-map-label');
      if (lbl) lbl.textContent = nearby.length + ' Asian restaurants in ' + stop.name;
    });
}

// ── Vega-Lite charts ──
const BASE = 'https://raw.githubusercontent.com/shsu0002/data2/main/files/';

const COLORS = {
  red:'#c94030', teal:'#1d7a68', gold:'#b87c2a',
  blue:'#378add', purple:'#7f6ab8', orange:'#e8863a',
  muted:'#d3d1c7', paper:'#f2ede5'
};

const CONFIG = {
  font: 'DM Sans',
  background: 'transparent',
  view: {stroke: null},
  axis: {
    labelFont:'DM Sans', titleFont:'DM Sans',
    labelColor:'#8a837a', titleColor:'#4a4540',
    gridColor:'#e8e0d4', domainColor:'#d3d1c7',
    labelFontSize:11, titleFontSize:11
  },
  legend: {
    labelFont:'DM Sans', titleFont:'DM Sans',
    labelColor:'#4a4540', titleColor:'#8a837a',
    labelFontSize:11
  }
};

// ── Chart 3: Vega-Lite choropleth ──
vegaEmbed('#chart-bar-suburbs', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container', height: 340,
  config: CONFIG,
  projection: {type: 'mercator'},
  data: {url: BASE + 'vic_suburbs_real.geojson', format: {type: 'json', property: 'features'}},
  mark: {type: 'geoshape', stroke: '#ccc', strokeWidth: 0.3},
  encoding: {
    color: {
      field: 'pct_asian',
      type: 'quantitative',
      scale: {domain: [30, 58], range: ['#c2e5de', '#1d7a68'], unknown: '#f0ece8'},
      legend: {title: 'Asian-born %', gradientLength: 100, orient: 'bottom-right'}
    },
    tooltip: [
      {field: 'suburb', title: 'Suburb'},
      {field: 'pct_asian', title: 'Asian-born %', format: '.1f'},
      {field: 'total_pop', title: 'Population', format: ','}
    ]
  }
}, {actions:false});

// ── Chart 2: Donut — cuisine breakdown ──
vegaEmbed('#chart-donut', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {url: BASE + '03_cuisine_breakdown.json'},
  config: CONFIG,
  width: 'container', height: 300,
  layer: [{
    mark: {type:'arc', innerRadius:70, outerRadius:120, padAngle:0.02, cornerRadius:3},
    encoding: {
      theta: {field:'count', type:'quantitative'},
      color: {field:'cuisine', type:'nominal',
        scale:{range:['#1d7a68','#c94030','#7f6ab8','#b87c2a','#378add','#e8863a','#d4537e','#485860']},
        legend:{orient:'right', title:null}},
      tooltip: [{field:'cuisine',title:'Cuisine'},{field:'count',title:'Restaurants'},{field:'pct',title:'Share %',format:'.1f'}]
    }
  }]
}, {actions:false});
