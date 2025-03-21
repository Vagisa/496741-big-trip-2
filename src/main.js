import { render } from './render';
import ButtonFilterView from './view/button-filter-view';
import ListFilterView from './view/list-filter-view';
import BoardPresenter from './presenter/board-presenter';
import PointsModel from './model/points-model';

const pageHeaderElement = document.querySelector('.page-header');
const pageMainElement = document.querySelector('.page-main');
const tripСontrolsFiltersElement = pageHeaderElement.querySelector('.trip-controls__filters');

const listFilterComponent = new ListFilterView();

render(listFilterComponent, tripСontrolsFiltersElement);
render(new ButtonFilterView, listFilterComponent.getElement());

const pointsModel = new PointsModel();
const boardPresenter = new BoardPresenter({
  boardContainer: pageMainElement,
  pointsModel
});

boardPresenter.init();
