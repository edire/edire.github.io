function slide(num,imgSrc,time,cls){
	this.num=num;
	this.imgSrc=imgSrc;
	this.time=time;
	this.cls=document.getElementsByClassName(cls)[0];	//��ȡbox
	var canSlide=true,thisImg=0,run,ts=this;
	this.slideInit=function(){
		var text='',x;
		for(x in imgSrc){				//�����е�ͼƬд���ַ���
				text+='<li class="case" style="background-image:url('+imgSrc[x]+')"><a href=""></a></li>';
			}
		console.log(text);
		this.cls.innerHTML=text;			//������õ��ַ�����ɶ���д��DOM
			
		this.img=this.cls.getElementsByClassName('case');//��ȡ�ֲ���λ			
		this.cls.appendChild(this.img[0].cloneNode(true));	//����һ����λ���Ʋ��ŵ����Ϊ��ʵ�������ֲ�
		var BoxWidth=(num+1)*100+'%';	//������ͼƬ�ĺ��ӿ��
		this.cls.style.width=BoxWidth	//���ô��ͼƬ�ĺ��ӿ��
		this.cls.style.left=0;				//���ô��ͼƬ���ӵ�left���Ա�ʹ��jquery������м�������
		var CaseWidth2=100/(num+1)+'%';//�����ֲ���λ�Ŀ��
		for(var i=0;i<this.img.length;i++){
			this.img[i].style.width=CaseWidth2;		//�����ֲ���λ�Ŀ��
		}
		run=this.slideTimeRun();
	}
	this.slideNext=function(){
		 if(canSlide==true){					//�ж��Ƿ����ִ���ֲ�
				 if(thisImg==this.num) {			//�ж��Ƿ������һ���ֲ���λ������Ǳ�Ϊ��һ���ֲ���λ
					this.cls.style.left=0;
					thisImg=0;
				 }
				canSlide=false;					//׼���ֲ�����ֹ�ظ��ֲ��¼�����
				clearInterval(run);						//ֹͣʱ�����¼�����ֹ�´��ֲ���ǰx
				var clsLeft=parseInt(ts.cls.style.left);
				var b=0;
				var t=setInterval(function(){
					b=b+5;
					console.log(b);
					clsLeft=clsLeft-5;
					ts.cls.style.left=clsLeft+'%';
					if(b==100){
						clearInterval(t);
						b=0;
						canSlide=true;
						thisImg++;
						run=ts.slideTimeRun();
					}
				},5);
			 }
	};
	this.slidePrev=function(){
		 if(canSlide==true){					//�ж��Ƿ����ִ���ֲ�
				 if(thisImg==0) {			//�ж��Ƿ������һ���ֲ���λ������Ǳ�Ϊ��һ���ֲ���λ
					this.cls.style.left=-this.num*100+'%';
					thisImg=this.num;
				 }
				canSlide=false;					//׼���ֲ�����ֹ�ظ��ֲ��¼�����
				clearInterval(run);						//ֹͣʱ�����¼�����ֹ�´��ֲ���ǰx
				var clsLeft=parseInt(ts.cls.style.left);
				var b=0;
				var t=setInterval(function(){
					b=b+5;
					console.log(b);
					clsLeft=clsLeft+5;
					ts.cls.style.left=clsLeft+'%';
					if(b==100){
						clearInterval(t);
						b=0;
						canSlide=true;
						thisImg++;
						run=ts.slideTimeRun();
					}
				},5);	
			 }
	};
	this.slideTimeRun=function(){
		return setInterval(function(){
			ts.slideNext();
				},this.time);
	}
}
