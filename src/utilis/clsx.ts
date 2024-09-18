type ObjectType<T = unknown> = Record<string | number, T>;

export function clsx(...params: Array<string | ObjectType<boolean>>): string {
    return params
      .flatMap((item) =>
        typeof item === "string"
          ? [item]
          : Object.entries(item)
              .filter(([, value]) => value)
              .map(([key]) => key),
      )
      .filter(Boolean)
      .join(" ");
  }
  