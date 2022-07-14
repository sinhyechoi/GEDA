
new fullpage('#fullpage', {
	
	autoScrolling:true,
	scrollHorizontally: true,
    scrollBar:true,
    sectionsColor: ['#fff', '#EBE7E4', '#FFC19E', '#BCE55C','#5CD1E5'],
    navigation: true,
	navigationPosition: 'right',
    navigationTooltips: ['GAH소개','제다큐어','연구개발','본사위치','연구소위치'], 
    easing: 'easeInOutCubic',
    anchors: ['1st', 'second', '3rd', '4th', '5th'],
    menu: '.gnb_list',
    normalScrollElements: '#s2',
});

