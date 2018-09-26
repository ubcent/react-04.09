const baseURL = 'http://localhost:3000/';

export default class Data {
  static getCompanionInfo(id, component) {
    fetch(baseURL + 'companions/' + id)
    .then((response) => response.json())
    .then((companion) => {
      component.setState({
        companionName: companion.name,
        companionStatus: companion.status,
      });
    }).catch(() => {
      component.setState({
        companionStatus: 'Off-line',
      })
    });
  };
  
  static getCompanionMessages(id, component) {
    fetch(baseURL + 'messages/?companionId=' + id)
    .then((response) => response.json())
    .then((messages) => {
      component.setState({
        companionMessage: messages.reduce((accumulator, item) => accumulator + item.message, ''),
        companionStatus: 'On-line',
      });
    }).catch(() => {
      component.setState({
        companionStatus: 'Off-line',
      })
    })
  }
  
  static getLastCompanionId(component) {
    fetch(baseURL + 'state/')
    .then((response) => response.json())
    .then((state) => {
      component.setState({
        companionId: state.lastCompanionId,
      });
    });
  };
  
  static getCompanionList(component) {
    fetch(baseURL + 'companions/')
    .then((response) => response.json())
    .then((list) => {
      component.setState({
        companionList: list,
      });
    });
  };
}