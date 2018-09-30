import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {AuthModalContent} from '../header/auth/auth.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ParticipateModalComponent} from './participate/participate.component';

@Component({
  selector: 'event-info',
  templateUrl: './event-info.component.html'
})

export class EventInfoComponent implements OnInit {

  id: number;
  private subscription: Subscription;

  event1 = { urlImg: "/src/resources/img/volga.jpg", title: "VolgaHuck", type: "Information Technology", date: "28 сентября 2018", organizer: "Никита Пузанков",
    place: "YellowRocket", free: 0,
    description: "С 28 по 30 сентября в Самаре пройдет соревнование для программистов, дизайнеров и других специалистов из области ИТ. " +
      "Около 5 реальных задач (треков), над которыми командам предстоит работать в течение 40 часов. Свободный выбор тем для проектов и " +
      "используемых технологий. Победители определяются независимым жюри.",
    coments: [
      {
        author: "Илон Маск", url: "/src/resources/img/mask.jpg",
        coment: "\n" +
          "Я пришел к заключению, что мы должны стремиться к увеличению объёма и масштаба человеческого сознания с целью понять, " +
          "какие вопросы нужно задавать. Действительно, единственная вещь, которая имеет смысл — " +
          "это стремиться к большому коллективному просветлению.",
      },
      {
        author: "Тим Кук", url: "/src/resources/img/cook.jpg",
        coment: "\n" +
          "Я твердо верю, что многие люди, радующиеся при покупке, из-за того, что они платят не высокую цену, разочаровываются, " +
          "когда приносят домой этот планшет и начинают его использовать. Их запросы в полной мере не удовлетворяются и это " +
          "первоначальное чувство выгодной покупки быстро проходит."
      }
    ]
  };

  event2 = { urlImg: "/src/resources/img/404.jpg", title: "404Fest 2018", type: "Information Technology", date: "6-7 сентября 2018", organizer: "Денис Кортунов",
    place: "Холидей Инн", free: 10,
    description: "Фестиваль 404 — отличное место, чтобы познакомиться с коллегами и узнать что-то новое. " +
      "Можно слушать доклады, задавать докладчикам вопросы или общаться в кулуарах с интересными людьми. " +
      "На фестивале совершенно особая приятная и дружественная атмосфера.",
    coments: [
      {
        author: "Илон Маск", url: "/src/resources/img/mask.jpg",
        coment: "\n" +
          "Я пришел к заключению, что мы должны стремиться к увеличению объёма и масштаба человеческого сознания с целью понять, " +
          "какие вопросы нужно задавать. Действительно, единственная вещь, которая имеет смысл — " +
          "это стремиться к большому коллективному просветлению.",
      },
      {
        author: "Тим Кук", url: "/src/resources/img/cook.jpg",
        coment: "\n" +
          "Я твердо верю, что многие люди, радующиеся при покупке, из-за того, что они платят не высокую цену, разочаровываются, " +
          "когда приносят домой этот планшет и начинают его использовать. Их запросы в полной мере не удовлетворяются и это " +
          "первоначальное чувство выгодной покупки быстро проходит."
      }
    ]
  };

  event3 = { urlImg: "/src/resources/img/panda.jpg", title: "PandaMeetup", type: "Information Technology", date: "15 октября 2018", organizer: "IT сообщество",
    place: "Место проведения уточняется", free: 100,
    description: "Основной принцип Panda-Meetup – живое общение IT-специалистов в неформальной обстановке на актуальные темы. " +
      "Разработчики и тим-лиды делятся опытом и рабочими кейсами. Panda-Meetup – обеспечивает рост компетенции и передачу опыта. " +
      "Митап полезен как опытным разработчикам, так и начинающим.",
    coments: [
      {
        author: "Илон Маск", url: "/src/resources/img/mask.jpg",
        coment: "\n" +
          "Я пришел к заключению, что мы должны стремиться к увеличению объёма и масштаба человеческого сознания с целью понять, " +
          "какие вопросы нужно задавать. Действительно, единственная вещь, которая имеет смысл — " +
          "это стремиться к большому коллективному просветлению.",
      },
      {
        author: "Тим Кук", url: "/src/resources/img/cook.jpg",
        coment: "\n" +
          "Я твердо верю, что многие люди, радующиеся при покупке, из-за того, что они платят не высокую цену, разочаровываются, " +
          "когда приносят домой этот планшет и начинают его использовать. Их запросы в полной мере не удовлетворяются и это " +
          "первоначальное чувство выгодной покупки быстро проходит."
      }
    ]
  };

  events = [{value: this.event1}, {value: this.event2}, {value: this.event3}];

  ngOnInit(): void {

  }

  constructor(private route: ActivatedRoute, private router: Router, private modalService: NgbModal){
      this.subscription = route.params.subscribe(params=>this.id=params['id']);
      console.log(this.id);
  }

  participate() {
    const modalRef = this.modalService.open(ParticipateModalComponent);
  }

}
