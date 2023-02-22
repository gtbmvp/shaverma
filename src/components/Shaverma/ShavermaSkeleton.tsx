import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import styles from "./shaverma.module.scss";

const ShavermaSkeleton = () => {
  return (
    <Stack spacing={1} className={styles.item}>
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rectangular" width={280} height={200} />
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
      <Skeleton variant="rounded" width={280} height={44} />
    </Stack>
  );
};

export default ShavermaSkeleton;
