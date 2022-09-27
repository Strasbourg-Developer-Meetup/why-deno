# Why Deno

## Presentation

Slides for the presentation [here](https://slides.com/kevinfaulhaber-1/deck)

<iframe src="https://slides.com/kevinfaulhaber-1/deck/embed" width="576" height="420" title="Why Deno" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Discovering the Deno CLI

### Available options

| name        | description                                                   |
|-------------|---------------------------------------------------------------|
| bench       | Run benchmarks                                                |
| bundle      | Bundle module and dependencies into single file               |
| cache       | Cache the dependencies                                        |
| check       | Type-check the dependencies                                   |
| compile     | UNSTABLE: Compile the script into a self contained executable |
| completions | Generate shell completions                                    |
| coverage    | Print coverage reports                                        |
| doc         | Show documentation for a module                               |
| eval        | Eval script                                                   |
| fmt         | Format source files                                           |
| help        | Print this message or the help of the given subcommand(s)     |
| info        | Show info about cache or info related to source file          |
| init        | Initialize a new project                                      |
| install     | Install script as an executable                               |
| lint        | Lint source files                                             |
| lsp         | Start the language server                                     |
| repl        | Read Eval Print Loop                                          |
| run         | Run a JavaScript or TypeScript program                        |
| task        | Run a task defined in the configuration file                  |
| test        | Run tests                                                     |
| types       | Print runtime TypeScript declarations                         |
| uninstall   | Uninstall a script previously installed with deno install     |
| upgrade     | Upgrade deno executable to given version                      |
| vendor      | Vendor remote modules into a local directory                  |

### Environment variables

Deno has multiple useful environment variables

    DENO_AUTH_TOKENS     A semi-colon separated list of bearer tokens and
                         hostnames to use when fetching remote modules from
                         private repositories
                         (e.g. "abcde12345@deno.land;54321edcba@github.com")
    DENO_TLS_CA_STORE    Comma-separated list of order dependent certificate
                         stores. Possible values: "system", "mozilla".
                         Defaults to "mozilla".
    DENO_CERT            Load certificate authority from PEM encoded file
    DENO_DIR             Set the cache directory
    DENO_INSTALL_ROOT    Set deno install's output directory
                         (defaults to $HOME/.deno/bin)
    DENO_NO_PROMPT       Set to disable permission prompts on access
                         (alternative to passing --no-prompt on invocation)
    DENO_WEBGPU_TRACE    Directory to use for wgpu traces
    DENO_JOBS            Number of parallel workers used for the --parallel
                         flag with the test subcommand. Defaults to number
                         of available CPUs.
    HTTP_PROXY           Proxy address for HTTP requests
                         (module downloads, fetch)
    HTTPS_PROXY          Proxy address for HTTPS requests
                         (module downloads, fetch)
    NO_COLOR             Set to disable color
    NO_PROXY             Comma-separated list of hosts which do not use a proxy
                         (module downloads, fetch)