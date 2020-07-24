window.onload = () => {
  const button = document.querySelector('button[data-action="change"]');
  button.innerText = '﹖';

  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
  return [
    {
      name: 'AR location based',
      location: {
        // decomment the following and add coordinates:
        lat: 55.649084,
        lng: 12.555048,
      },
    },
  ];
}

var models = [
  //   {
  //     url: './assets/nissan/scene.gltf',
  //     scale: '1 1 1',
  //     rotation: '0 90 0',
  //     position: '0 0 -5',
  //     info: 'Nissan GTMs Max',
  //   },
  //   {
  //     url: './assets/spinosaurus/scene.gltf',
  //     scale: '1 1 1',
  //     rotation: '0 90 0',
  //     position: '0 0 -5',
  //     info:
  //       'Spinosaurus, dinosaur that lived in what now is North Africa 112 to 93.5 million years ago.',
  //   },
  //   {
  //     url: './assets/velociraptor/scene.gltf',
  //     scale: '1 1 1',
  //     rotation: '0 90 0',
  //     position: '0 0 -5',
  //     info:
  //       'Velociraptor, 71 million years ago during the latter part of the Cretaceous Period.',
  //   },
  //   {
  //     url: './assets/warrior/scene.gltf',
  //     scale: '2 2 2',
  //     rotation: '0 90 0',
  //     position: '0 0 -5',
  //     info: 'Warrior',
  //   },
  {
    url: './assets/magnemite/scene.gltf',
    scale: '0.5 0.5 0.5',
    rotation: '0 180 0',
    position: '0 1.6 -5',
    info: 'Magnemite',
  },
  {
    url: './assets/articuno/scene.gltf',
    scale: '0.2 0.2 0.2',
    rotation: '0 180 0',
    position: '0 1.6 -5',
    info: 'Articuno',
  },
  {
    url: './assets/dragonite/scene.gltf',
    scale: '0.08 0.08 0.08',
    rotation: '0 180 0',
    position: '0 1.6 -5',
    info: 'Dragonite',
  },
];

var modelIndex = 0;
var setModel = function (model, entity) {
  if (model.scale) {
    entity.setAttribute('scale', model.scale);
  }

  if (model.rotation) {
    entity.setAttribute('rotation', model.rotation);
  }

  if (model.position) {
    entity.setAttribute('position', model.position);
  }

  entity.setAttribute('gltf-model', model.url);

  const div = document.querySelector('.instructions');
  div.innerText = model.info;
};

function renderPlaces(places) {
  let scene = document.querySelector('a-scene');

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;

    let model = document.createElement('a-entity');
    model.setAttribute(
      'gps-entity-place',
      `latitude: ${latitude}; longitude: ${longitude};`
    );

    setModel(models[modelIndex], model);

    model.setAttribute('animation-mixer', '');

    document
      .querySelector('button[data-action="change"]')
      .addEventListener('click', function () {
        var entity = document.querySelector('[gps-entity-place]');
        modelIndex++;
        var newIndex = modelIndex % models.length;
        setModel(models[newIndex], entity);
      });

    scene.appendChild(model);
  });
}
