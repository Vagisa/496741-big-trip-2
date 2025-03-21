import { render } from '../render';
import ListSortView from '../view/list-sort-view';
import ListTripView from '../view/list-trip-view';
import ItemTripView from '../view/item-trip-view';
import EditPointView from '../view/edit-point-view';
import AddNewPointView from '../view/add-new-point-view';

const pageMainElement = document.querySelector('.page-main');
const tripEventsElement = pageMainElement.querySelector('.trip-events');

export default class BoardPresenter {
  listTripComponent = new ListTripView();

  constructor({boardContainer, pointsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];
    this.destinations = [...this.pointsModel.getDestinations()];
    this.offers = [...this.pointsModel.getOffers()];

    render(new ListSortView, tripEventsElement);
    render(this.listTripComponent, tripEventsElement);
    render(new AddNewPointView, this.listTripComponent.getElement());
    render(new EditPointView, this.listTripComponent.getElement());
    for (let i = 0; i < this.boardPoints.length; i++) {
      const point = {...this.boardPoints[i]};
      point.destination = this.destinations.find((itemDestination) => itemDestination.id === point.destination);
      render(new ItemTripView({point}), this.listTripComponent.getElement());
    }
  }
}
