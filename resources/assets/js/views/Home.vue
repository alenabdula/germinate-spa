<template>
    <div id="germinate-home" class="container">
        <h1>Example</h1>
        <!-- HEADINGS -->
        <section class="layout-headings">
            <h1 class="title">Headings</h1>
            <h1>Example Heading 1</h1>
            <h2>Example Heading 2</h2>
            <h3>Example Heading 3</h3>
            <h4>Example Heading 4</h4>
            <h5>Example Heading 5</h5>
            <h6>Example Heading 6</h6>
            <h1>Example Heading 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe optio doloremque animi qui sequi, eum ea asperiores quidem nesciunt voluptatem eligendi temporibus, porro quae, quibusdam vero, nisi tenetur totam quos.</p>
            <h2>Example Heading 2</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Nostrum excepturi repellat nobis! Commodi reprehenderit tempora eveniet itaque accusamus totam delectus ex debitis ipsa, pariatur quibusdam libero minus at? Asperiores, ea.</p>
            <h3>Example Heading 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore, laudantium maiores placeat perferendis iusto iure! Veniam, iusto. Doloremque nemo nobis sit maiores libero aliquam eius aperiam illo similique rem!</p>
            <h4>Example Heading 4</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident explicabo quae fugiat labore atque repudiandae inventore, ratione id debitis beatae quaerat sunt nemo distinctio fuga, sequi. Rerum, laboriosam, quasi.</p>
            <h5>Example Heading 5</h5>
            <p>Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Culpa animi, quasi maiores labore aliquam. Totam quibusdam placeat quasi quos asperiores, amet autem dicta. Nobis doloremque delectus possimus, corrupti facilis, blanditiis?</p>
            <h6>Example Heading 6</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quis molestiae vero minus ut, enim officia modi sunt rerum magnam dignissimos, fuga necessitatibus aut dicta quibusdam, aperiam voluptatum illo et.</p>
        </section>
        <!-- \HEADINGS -->
        <!-- INLINE ELEMENTS -->
        <section>
            <h1 class="title">Inline Elements</h1>
            <h2>ins, s, em, small, strong, abbr, code, a, mark,  var, del, kbd, samp</h2>
            <p>Lorem ipsum dolor, sit amet <ins title="<ins></ins>">addition to the document</ins> adipisicing elit. Molestiae veniam, magnam impedit <s title="<s></s>">no longer accurate.</s> deserunt doloremque ea <em title="<em></em>">aliquid animi dolor explicabo minus vero</em> aut velit. Ipsum, <small title="<small></small>">alias enim eligendi</small> nulla officia.</p>
            <p>Dolorem laboriosam, soluta unde ea voluptas sint dignissimos <strong title="<strong></strong>">voluptatibus perferendis quaerat</strong> ipsa reprehenderit, aliquid labore enim neque magnam, doloremque ratione ex? Laborum, ut est, saepe sed <abbr title="<abbr></abbr>">abbr</abbr> reprehenderit doloribus sit!</p>
            <p>Debitis totam, <code title="<code>Inline<code/>">&lt;inline-code-block&gt;</code> veritatis mollitia officiis. Voluptate nulla mollitia <a title="<a></a>" href="#">inventore consequuntur hic eos veniam magnam</a> ipsum non magni at, distinctio, sint officiis corporis, <mark title="<mark></mark>">marked text</mark> fugit aliquam possimus cumque nihil nisi.</p>
            <p>Iure voluptas <var title="<var></var>">y</var> = <var title="<var></var>">m</var><var title="<var></var>">x</var> + <var title="<var></var>">b</var> amet officia delectus pariatur voluptates optio, tempore reiciendis accusantium commodi laboriosam earum rem maiores nobis sit nam non facilis ad et doloremque. Exercitationem earum cum magni maxime. Voluptas vitae, <del title="<del></del>">deleted text</del> dicta minus enter code <kbd title="<kbd></kbd>">cd .</kbd> cumque press <kbd><kbd title="<kbd></kbd>">Ctrl</kbd> + <kbd title="<kbd></kbd>">,</kbd></kbd> sed error pariatur dolorum, nihil <samp title="<samp></samp>">output from a computer program</samp> temporibus vero esse sapiente quas. Hic quam quia nesciunt deserunt excepturi quo repellendus dolores provident quae molestiae.</p>
            <h2>Code Block</h2>
<pre><code>&lt;germinate-spa :data="data"&gt;&lt;/germinate-spa&gt;
&lt;germinate-gallery :images="images"&gt;&lt;/germinate-spa&gt;</code></pre>
        </section>
        <!-- \INLINE ELEMENTS -->
        <!-- TABLES -->
        <section>
            <h1 class="title">Tables</h1>
            <table>
                <caption>Table caption</caption>
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Amount</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nikon D6</td>
                        <td>$19,459.43</td>
                        <td>Brand New</td>
                    </tr>
                    <tr>
                        <td>Nikon F100</td>
                        <td>$59.99</td>
                        <td>Used</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex facere aliquam asperiores inventore corrupti aspernatur nihil blanditiis, necessitatibus incidunt atque obcaecati iste temporibus ipsam possimus minus error earum? Quo!</th>
                    </tr>
                </tfoot>
            </table>
        </section>
        <!-- \TABLES -->
        <!-- BLOCKQUOTES -->
        <section>
            <h1 class="title">Blockquotes</h1>
            <p>Default blockquote</p>
            <blockquote>
                <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <p>Naming a source</p>
            <figure>
                <blockquote><p>A well-known quote, contained in a blockquote element.</p></blockquote>
                <figcaption>Someone famous in <cite title="Source Title">Source Title</cite></figcaption>
            </figure>
        </section>
        <!-- \BLOCKQUOTES -->
        <!-- PICTURE -->
        <section>
            <h1 class="title">Picture element</h1>
<pre><code>&lt;picture&gt;
    &lt;source srcset="" type="image/avif" /&gt;
    &lt;source srcset="" type="image/webp" /&gt;
    &lt;source srcset="" type="image/svg+xml"&gt;
    &lt;img src="https://via.placeholder.com/640x420" alt="photo" /&gt;
&lt;/picture&gt;</code></pre>
            <picture>
                <source srcset="" type="image/avif" />
                <source srcset="" type="image/webp" />
                <source srcset="" type="image/svg+xml">
                <img src="https://via.placeholder.com/640x420" alt="photo" />
            </picture>
        </section>
        <!-- \PICTURE -->
        <!-- LISTS-->
        <section>
            <h1 class="title">Lists</h1>
            <p>Unordered List</p>
            <ul>
                <li>This is unordered list.</li>
                <li>It appears completely unstyled.</li>
                <li>Nested lists:
                    <ul>
                        <li>will still show a bullet</li>
                        <li>and have appropriate left margin</li>
                    </ul>
                </li>
                <li>Last element in unordered list</li>
            </ul>
            <p>Ordered List</p>
            <ol>
                <li>This is a ordered list.</li>
                <li>It appears completely unstyled.</li>
                <li>Nested lists:
                    <ol>
                        <li>will still show a numeral</li>
                        <li>and have appropriate left margin</li>
                    </ol>
                </li>
                <li>Last element in ordered list</li>
            </ol>
        </section>
        <!-- \LISTS-->
        <!-- DEFINITION LISTS-->
        <section>
            <h1 class="title">Definition List</h1>
            <dl>
                <dt>Description lists</dt>
                <dd>A description list is perfect for defining terms.</dd>
                <dt>Term</dt>
                <dd>
                    <p>Definition for the term.</p>
                    <p>And some more placeholder definition text.</p>
                </dd>
                <dt>Another term</dt>
                <dd>This definition is short, so no extra paragraphs or anything.</dd>
                <dt>Truncated term is truncated</dt>
                <dd>This can be useful when space is tight. Adds an ellipsis at the end.</dd>
                <dt>Nesting</dt>
                    <dd>
                        <dl>
                            <dt>Nested definition list</dt>
                            <dd>I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
                        </dl>
                    </dd>
                </dl>
        </section>
        <!-- \DEFINITION LISTS-->
        <!-- FORMS-->
        <section>
            <h1 class="title">Forms</h1>
            <form @submit.prevent="">
                <fieldset>
                    <legend>Example legend</legend>
                    <p>
                        <label for="output">Example output the outcome of a user action: </label>
                        <output name="result" id="output">100</output>
                    </p>
                    <p>
                        <label for="input">Example input</label>
                        <input type="text" id="input" placeholder="Example input">
                    </p>
                    <p>
                        <label for="email">Example email</label>
                        <input type="email" id="email" placeholder="test@example.com">
                    </p>
                    <p>
                        <label for="tel">Example telephone</label>
                        <input type="tel" id="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890">
                    </p>
                    <p>
                        <label for="url">Example url</label>
                        <input type="url" id="url" placeholder="www...">
                    </p>
                    <p>
                        <label for="number">Example number</label>
                        <input type="number" id="number" value="0">
                    </p>
                    <p>
                        <label for="search">Example search</label>
                        <input type="search" id="search" placeholder="Search...">
                    </p>
                    <p>
                        <label for="range">Example range</label>
                        <input type="range" id="range" min="0" max="10">
                    </p>
                    <p>
                        <label for="file">Example file input</label>
                        <input type="file" id="file">
                    </p>
                    <p>
                        <label for="progress">Example progress</label>
                        <progress id="progress" max="100" value="70"> 70% </progress>
                    </p>
                    <p>
                        <label for="select">Example select</label>
                        <select id="select">
                            <option value="">Choose...</option>
                            <optgroup label="Option group 1">
                                <option value="">Option 1</option>
                                <option value="">Option 2</option>
                                <option value="">Option 3</option>
                            </optgroup>
                            <optgroup label="Option group 2">
                                <option value="">Option 4</option>
                                <option value="">Option 5</option>
                                <option value="">Option 6</option>
                            </optgroup>
                        </select>
                    </p>
                    <p>
                        <label><input type="checkbox" value="">Check this checkbox</label>
                    </p>
                    <p>
                        <p><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">Option one is this and that</label></p>
                        <p><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">Option one is this and that</label></p>
                        <p><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled="">Option three is disabled</label></p>
                    </p>
                    <p>
                        <label for="textarea">Example textarea</label><br>
                        <textarea id="textarea" rows="3"></textarea>
                    </p>
                    <p>
                        <label for="date">Example date</label>
                        <input type="date" id="date">
                    </p>
                    <p>
                        <label for="time">Example time</label>
                        <input type="time" id="time">
                    </p>
                    <p>
                        <label for="password">Example password</label>
                        <input type="password" id="password" required>
                    </p>
                    <p>
                        <label for="datetime-local">Example datetime-local</label>
                        <input type="datetime-local" id="datetime-local">
                    </p>
                    <p>
                        <label for="week">Example week</label>
                        <input type="week" id="week">
                    </p>
                    <p>
                        <label for="month">Example month</label>
                        <input type="month" id="month">
                    </p>
                    <p>
                        <label for="color">Example color</label>
                        <input type="color" id="color" value="#e66465">
                    </p>
                    <p><button type="submit">Button submit</button></p>
                    <p><input type="submit" value="Input submit button"></p>
                    <p><input type="reset" value="Input reset button"></p>
                    <p><input type="button" value="Input button"></p>
                    <p><button type="submit" disabled="">Button submit</button></p>
                    <p><input type="submit" value="Input submit button" disabled=""></p>
                    <p><input type="reset" value="Input reset button" disabled=""></p>
                    <p><input type="button" value="Input button" disabled=""></p>
                </fieldset>
            </form>
        </section>
    </div>
</template>

<script>
    export default {
        beforeRouteEnter(to, from, next) {
            console.log('Home.vue---beforeRouteEnter: ' + to.name)
            next()
        },
        computed: {},
        mounted() {
            // let obj = this.$refs
            // for (let [key, value] of Object.entries(obj)) {
            //     obj[key].classList.add('')
            // }
            console.log(this.$refs)
        }
    }
</script>

<style lang="scss">
    @import '~GlobalSass';
    #germinate-home {
        .title {
            border-bottom: 1px solid $brand-color-primary;
        }
    }
</style>