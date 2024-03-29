import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Essiential Tools',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Electron app distribution evolves beyond manual edits, with tools like electron-packager, @electron/osx-sign, electron-winstaller, and electron-rebuild. While mature, developers must grasp each tool's function and script integration, posing challenges for newcomers. Simplifying distribution requires understanding and streamlining the toolset into a cohesive build pipeline.
      </>
    ),
  },
  {
    title: 'Value proposition    ',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Electron Forge is an all-in-one solution that unifies this fractured ecosystem. With Forge, you can create a build pipeline that brings your app from development to distribution with minimal configuration.

Forge is also built with advanced use cases in mind—you can add any build logic you need with custom plugins, makers or publishers. For more details, see the Extending Electron Forge section of the docs.
      </>
    ),
  },
  {
    title: 'Forge vs. Builder',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Electron Forge can be considered an alternative to Electron Builder, which fulfills the same use-case for application building and publishing.

The key difference in philosophy between the two projects is that Electron Forge focuses on combining existing first-party tools into a single build pipeline, while Builder rewrites its own in-house logic for most build tasks.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
