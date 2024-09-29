# middle-click-pan plugin example

Enable panning the map by clicking and holding the mouse's middle button. Panning with left click is disabled allowing using that for other functionalities like drawing or dragging something.

## Usage

```typescript
import middleClickPanHandler from "./middleClickPanHandler.ts";

// ...

const map = useMap();

    React.useEffect(() => {
        // add custom map handler for middle click panning
        map.addHandler("middleClickPanHandler", middleClickPanHandler);

        // @ts-expect-error typescript does not see custom handler
        map.middleClickPanHandler.enable();

        return () => {
            // @ts-expect-error typescript does not see custom handler
            map.middleClickPanHandler.disable();
        }
    }, []);
```
